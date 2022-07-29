import Http from '../Http'
import type { IOrder, IOrderResult, StatusOptions } from '../interfaces/Order'
import routes from '../routes'
import prepareParamsFromOptions from '../helpers/params'

export default class Order extends Http {
  public async status(options: StatusOptions): Promise<IOrderResult> {
    const { token } = prepareParamsFromOptions(options)

    return await this.spreeResponse<IOrder>('get', routes.orderStatusPath(options.order_number), token, {})
  }
}
