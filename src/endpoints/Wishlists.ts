import Http from '../Http'
import type { NoContentResponse, NoContentResult } from '../interfaces/NoContent'
import type {
  WishedItem,
  WishedItemResult,
  AddWishedItemOptions,
  UpdateWishedItemOptions,
  RemoveWishedItemOptions
} from '../interfaces/WishedItem'
import type {
  WishlistsResult,
  Wishlists as WishlistsResponse,
  Wishlist as WishlistResponse,
  WishlistResult,
  ListOptions,
  ShowOptions,
  DefaultOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions
} from '../interfaces/Wishlist'
import routes from '../routes'
import prepareParamsFromOptions from '../helpers/params'

export default class Wishlists extends Http {
  public async list(options: ListOptions): Promise<WishlistsResult> {
    const { token, bodyParams: params } = prepareParamsFromOptions(options)

    return await this.spreeResponse<WishlistsResponse>('get', routes.wishlistsPath(), token, params)
  }

  public async show(options: ShowOptions): Promise<WishlistResult> {
    const { token, bodyParams: params, pathParams } = prepareParamsFromOptions(options, ['wishlist_token'])

    return await this.spreeResponse<WishlistResponse>('get', routes.wishlistPath(pathParams.wishlist_token), token, params)
  }

  public async default(options: DefaultOptions): Promise<WishlistResult> {
    const { token, bodyParams: params } = prepareParamsFromOptions(options)

    return await this.spreeResponse<WishlistResponse>('get', routes.defaultWishlistPath(), token, params)
  }

  public async create(options: CreateOptions): Promise<WishlistResult> {
    const { token, bodyParams: params } = prepareParamsFromOptions(options)

    return await this.spreeResponse<WishlistResponse>('post', routes.wishlistsPath(), token, params)
  }

  public async update(options: UpdateOptions): Promise<WishlistResult> {
    const { token, bodyParams: params, pathParams } = prepareParamsFromOptions(options, ['wishlist_token'])

    return await this.spreeResponse<WishlistResponse>('patch', routes.wishlistPath(pathParams.wishlist_token), token, params)
  }

  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { token } = prepareParamsFromOptions(options)

    return await this.spreeResponse<NoContentResponse>('delete', routes.wishlistPath(options.wishlist_token), token, {})
  }

  public async addWishedItem(options: AddWishedItemOptions): Promise<WishedItemResult> {
    const { token, bodyParams: params, pathParams } = prepareParamsFromOptions(options, ['wishlist_token'])

    return await this.spreeResponse<WishedItem>(
      'post',
      routes.wishlistsAddWishedItemPath(pathParams.wishlist_token),
      token,
      params
    )
  }

  public async updateWishedItem(options: UpdateWishedItemOptions): Promise<WishedItemResult> {
    const { token, bodyParams: params, pathParams } = prepareParamsFromOptions(options, ['wishlist_token', 'id'])

    return await this.spreeResponse<WishedItem>(
      'patch',
      routes.wishlistsUpdateWishedItemQuantityPath(pathParams.wishlist_token, pathParams.id),
      token,
      params
    )
  }

  public async removeWishedItem(options: RemoveWishedItemOptions): Promise<WishedItemResult> {
    const { token } = prepareParamsFromOptions(options)

    return await this.spreeResponse<WishedItem>(
      'delete',
      routes.wishlistsRemoveWishedItemPath(options.wishlist_token, options.id),
      token,
      {}
    )
  }
}
