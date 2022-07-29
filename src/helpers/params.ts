type Token = {
  bearerToken?: string
  orderToken?: string
}

const prepareParamsFromOptions = (options: any, params?: Array<string>) => {
  let token: Token = {}
  let bodyParams: any = options
  let pathParams: any = {}

  if (bodyParams.bearer_token) {
    token.bearerToken = bodyParams.bearer_token
    delete bodyParams.bearer_token
  }

  if (bodyParams.order_token) {
    token.orderToken = bodyParams.order_token
    delete bodyParams.order_token
  }

  if (params?.length > 0) {
    for (const param of params) {
      if (bodyParams[param]) {
        pathParams[param] = bodyParams[param]
        delete bodyParams[param]
      }
    }
  }

  return {
    token,
    bodyParams,
    pathParams
  }
}

export default prepareParamsFromOptions
