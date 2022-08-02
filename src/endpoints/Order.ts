import Http from '../Http'
import type { IOrder, IOrderResult, StatusOptions } from '../interfaces/Order'
import routes from '../routes'
import prepareParamsFromOptions from '../helpers/params'
import { RequiredAnyToken } from '../interfaces/Token'

export default class Order extends Http {
  public async status(options: StatusOptions): Promise<IOrderResult> {
    const { token }: { token: RequiredAnyToken } = prepareParamsFromOptions(options)

    return await this.spreeResponse<IOrder>('get', routes.orderStatusPath(options.order_number), token, {})
  }
}
