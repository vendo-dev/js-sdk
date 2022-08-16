import {
  MisconfigurationError,
  NoResponseError,
  SpreeSDKError
} from './errors'
import FetchError from './errors/FetchError'
import * as result from './helpers/result'
import type { Fetcher } from './interfaces/ClientConfig'
import type { ErrorType } from './interfaces/errors/ErrorType'
import type { FetchConfig, HttpMethod, ResponseParsing } from './interfaces/FetchConfig'
import type { JsonApiResponse } from './interfaces/JsonApi'
import type { ResultResponse } from './interfaces/ResultResponse'
import type { OptionalAnyToken } from './interfaces/Token'
import type { SpreeError } from './errors'

export type EndpointOptions = {
  fetcher: Fetcher
}

export default class Http {
  public fetcher: Fetcher

  constructor({ fetcher }: EndpointOptions) {
    this.fetcher = fetcher
  }

  protected async spreeResponse<ResponseType = JsonApiResponse>(
    method: HttpMethod,
    url: string,
    tokens: OptionalAnyToken = {},
    params: any = {},
    responseParsing: ResponseParsing = 'automatic'
  ): Promise<ResultResponse<ResponseType>> {
    try {
      const headers = this.spreeOrderHeaders(tokens)

      const fetchOptions: FetchConfig = {
        url,
        params,
        method,
        headers,
        responseParsing
      }

      const response = await this.fetcher.fetch(fetchOptions)

      return result.makeSuccess(response.data)
    } catch (error) {
      return result.makeFail(this.processError(error))
    }
  }

  protected processError(error: Error): any {
    if ((error as FetchError)?.response) {
      const fetchError = (error as FetchError)
      if (fetchError.response) {
        // Error from Spree outside HTTP 2xx codes
        return this.processSpreeError(fetchError)
      }

      if (fetchError.request) {
        // No response received from Spree
        return new NoResponseError()
      }

      // Incorrect request setup
      return new MisconfigurationError(error.message)
    }

    return new SpreeSDKError(error.message)
  }

  protected processSpreeError(error: FetchError): SpreeError {
    const { response: { status: code }, data: { error: message } } = error

    return { code, message }
  }

  protected spreeOrderHeaders(tokens: OptionalAnyToken): { [headerName: string]: string } {
    const header = {}

    if (tokens.orderToken) {
      header['X-Spree-Order-Token'] = tokens.orderToken
    }

    if (tokens.bearerToken) {
      header['Authorization'] = `Bearer ${tokens.bearerToken}`
    }

    return header
  }
}
