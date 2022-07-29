import Http from '../Http'
import type {
  EstimatedShippingRates,
  EstimatedShippingRatesResult,
} from '../interfaces/EstimatedShippingMethod'
import type { IOrder, IOrderResult } from '../interfaces/Order'
import type { NoContentResponse, NoContentResult } from '../interfaces/NoContent'
import routes from '../routes'
import type {
  AddItemOptions,
  ApplyCouponCodeOptions,
  AssociateGuestCartOptions,
  ChangeCurrencyOptions,
  CreateOptions,
  EmptyCartOptions,
  EstimateShippingRatesOptions,
  RemoveAllCouponsOptions,
  RemoveCouponCodeOptions,
  RemoveItemOptions,
  RemoveOptions,
  SetQuantityOptions,
  ShowOptions
} from '../interfaces/Cart'
import prepareParamsFromOptions from '../helpers/params'

export default class Cart extends Http {
  public async show(options: ShowOptions): Promise<IOrderResult> {
    const { token } = prepareParamsFromOptions(options)

    return await this.spreeResponse<IOrder>('get', routes.cartPath(), token, {})
  }

  public async create(options?: CreateOptions): Promise<IOrderResult> {
    const { token } = prepareParamsFromOptions(options)

    return await this.spreeResponse<IOrder>('post', routes.cartPath(), token, {})
  }

  public async addItem(options: AddItemOptions): Promise<IOrderResult> {
    const { token, bodyParams: params } = prepareParamsFromOptions(options)

    return await this.spreeResponse<IOrder>('post', routes.cartAddItemPath(), token, params)
  }

  public async removeItem(options: RemoveItemOptions): Promise<IOrderResult> {
    const { token } = prepareParamsFromOptions(options)

    return await this.spreeResponse<IOrder>('delete', routes.cartRemoveItemPath(options.id), token, {})
  }

  public async emptyCart(options: EmptyCartOptions): Promise<IOrderResult> {
    const { token } = prepareParamsFromOptions(options)

    return await this.spreeResponse<IOrder>('patch', routes.cartEmptyPath(), token, {})
  }

  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { token } = prepareParamsFromOptions(options)

    return await this.spreeResponse<NoContentResponse>('delete', routes.cartPath(), token, {})
  }

  public async setQuantity(options: SetQuantityOptions): Promise<IOrderResult> {
    const { token, bodyParams: params } = prepareParamsFromOptions(options)

    return await this.spreeResponse<IOrder>('patch', routes.cartSetItemQuantity(), token, params)
  }

  public async applyCouponCode(options: ApplyCouponCodeOptions): Promise<IOrderResult> {
    const { token, bodyParams: params } = prepareParamsFromOptions(options)

    return await this.spreeResponse<IOrder>('patch', routes.cartApplyCodePath(), token, params)
  }

  public async removeCouponCode(options: RemoveCouponCodeOptions): Promise<IOrderResult> {
    const { token, bodyParams: params } = prepareParamsFromOptions(options)

    let route: string

    if (options.coupon_code) {
      route = routes.cartRemoveCodePath(options.coupon_code)
    } else {
      route = routes.cartRemoveAllCoupons()
    }

    return await this.spreeResponse<IOrder>('delete', route, token, params)
  }

  public async removeAllCoupons(options: RemoveAllCouponsOptions): Promise<IOrderResult> {
    const { token } = prepareParamsFromOptions(options)

    return await this.spreeResponse<IOrder>('delete', routes.cartRemoveAllCoupons(), token, {})
  }

  public async estimateShippingRates(options: EstimateShippingRatesOptions): Promise<EstimatedShippingRatesResult> {
    const { token, bodyParams: params } = prepareParamsFromOptions(options)

    return await this.spreeResponse<EstimatedShippingRates>(
      'get',
      routes.cartEstimateShippingRatesPath(),
      token,
      params
    )
  }

  public async associateGuestCart(options: AssociateGuestCartOptions): Promise<IOrderResult> {
    const { token, bodyParams: params } = prepareParamsFromOptions(options)

    return await this.spreeResponse<IOrder>('patch', routes.cartAssociatePath(), token, params)
  }

  public async changeCurrency(options: ChangeCurrencyOptions): Promise<IOrderResult> {
    const { token, bodyParams: params } = prepareParamsFromOptions(options)

    return await this.spreeResponse<IOrder>('patch', routes.cartChangeCurrencyPath(), token, params)
  }
}
