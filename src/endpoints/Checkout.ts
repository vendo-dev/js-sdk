import Http from '../Http'
import type {
  CreateStripeSessionOptions,
  AddPaymentOptions,
  SelectShippingMethodOptions,
  ShippingRatesOptions,
  PaymentMethodsOptions,
  RemoveStoreCreditsOptions,
  AddStoreCreditOptions,
  CompleteOptions,
  AdvanceOptions,
  OrderUpdateOptions,
  OrderNextOptions
} from '../interfaces/Checkout'
import type { IOrder, IOrderResult } from '../interfaces/Order'
import type { IPaymentMethods, IPaymentMethodsResult } from '../interfaces/PaymentMethod'
import type {
  ShippingRates,
  ShippingRatesResult
} from '../interfaces/ShippingMethod'
import {
  StripeCheckoutSessionSummary,
  StripeCheckoutSessionSummaryResult
} from '../interfaces/StripeCheckoutSessionSummary'
import routes from '../routes'
import prepareParamsFromOptions from '../helpers/params'
import { RequiredAnyToken } from '../interfaces/Token'

export default class Checkout extends Http {
  public async orderNext(options: OrderNextOptions): Promise<IOrderResult> {
    const { token }: { token: RequiredAnyToken } = prepareParamsFromOptions(options)

    return await this.spreeResponse<IOrder>('patch', routes.checkoutNextPath(), token, {})
  }

  public async orderUpdate(options: OrderUpdateOptions): Promise<IOrderResult> {
    const { token, bodyParams: params }: { token: RequiredAnyToken; bodyParams: any } = prepareParamsFromOptions(options)

    return await this.spreeResponse<IOrder>('patch', routes.checkoutPath(), token, params)
  }

  public async advance(options: AdvanceOptions): Promise<IOrderResult> {
    const { token }: { token: RequiredAnyToken } = prepareParamsFromOptions(options)

    return await this.spreeResponse<IOrder>('patch', routes.checkoutAdvancePath(), token, {})
  }

  public async complete(options: CompleteOptions): Promise<IOrderResult> {
    const { token }: { token: RequiredAnyToken } = prepareParamsFromOptions(options)

    return await this.spreeResponse<IOrder>('patch', routes.checkoutCompletePath(), token, {})
  }

  public async addStoreCredits(options: AddStoreCreditOptions): Promise<IOrderResult> {
    const { token, bodyParams: params }: { token: RequiredAnyToken; bodyParams: any } = prepareParamsFromOptions(options)

    return await this.spreeResponse<IOrder>('post', routes.checkoutAddStoreCreditsPath(), token, params)
  }

  public async removeStoreCredits(options: RemoveStoreCreditsOptions): Promise<IOrderResult> {
    const { token }: { token: RequiredAnyToken } = prepareParamsFromOptions(options)

    return await this.spreeResponse<IOrder>('post', routes.checkoutRemoveStoreCreditsPath(), token, {})
  }

  public async paymentMethods(options: PaymentMethodsOptions): Promise<IPaymentMethodsResult> {
    const { token }: { token: RequiredAnyToken } = prepareParamsFromOptions(options)

    return await this.spreeResponse<IPaymentMethods>('get', routes.checkoutPaymentMethodsPath(), token, {})
  }

  public async shippingRates(options: ShippingRatesOptions): Promise<ShippingRatesResult> {
    const { token, bodyParams: params }: { token: RequiredAnyToken; bodyParams: any } = prepareParamsFromOptions(options)

    return await this.spreeResponse<ShippingRates>('get', routes.checkoutShippingRatesPath(), token, params)
  }

  public async selectShippingMethod(options: SelectShippingMethodOptions): Promise<IOrderResult> {
    const { token, bodyParams: params }: { token: RequiredAnyToken; bodyParams: any } = prepareParamsFromOptions(options)

    return await this.spreeResponse<IOrder>('patch', routes.checkoutSelectShippingMethodPath(), token, params)
  }

  public async addPayment(options: AddPaymentOptions): Promise<IOrderResult> {
    const { token, bodyParams: params }: { token: RequiredAnyToken; bodyParams: any } = prepareParamsFromOptions(options)

    return await this.spreeResponse<IOrder>('post', routes.checkoutAddPaymentPath(), token, params)
  }

  public async createStripeSession(options: CreateStripeSessionOptions): Promise<StripeCheckoutSessionSummaryResult> {
    const { token, bodyParams: params }: { token: RequiredAnyToken; bodyParams: any } = prepareParamsFromOptions(options)

    return await this.spreeResponse<StripeCheckoutSessionSummary>(
      'patch',
      routes.checkoutCreateStripeSessionPath(),
      token,
      params
    )
  }
}
