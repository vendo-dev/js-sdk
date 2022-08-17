import Http from '../Http'
import type {
  IProduct,
  IProductResult,
  IProducts,
  IProductsResult,
  ListOptions,
  ShowOptions
} from '../interfaces/Product'
import routes from '../routes'
import prepareParamsFromOptions from '../helpers/params'

export default class Products extends Http {
  public async list(options: ListOptions): Promise<IProductsResult> {
    const { bodyParams: params } = prepareParamsFromOptions(options)

    return await this.spreeResponse<IProducts>('get', routes.productsPath(), {}, params)
  }

  public async show(options: ShowOptions): Promise<IProductResult> {
    const { bodyParams: params } = prepareParamsFromOptions(options)

    return await this.spreeResponse<IProduct>('get', routes.productPath(options.id), {}, params)
  }
}
