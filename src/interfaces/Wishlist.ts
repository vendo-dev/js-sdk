import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi'
import { IRelationships } from './Relationships'
import { ResultResponse } from './ResultResponse'
import { WithCommonOptions } from './WithCommonOptions'

export interface WishlistAttr extends JsonApiDocument {
  type: string
  id: string
  attributes: {
    token: string
    name: string
    is_private: boolean
    is_default: boolean
    variant_included: boolean
  }
  relationships: IRelationships
}

export interface Wishlist extends JsonApiSingleResponse {
  data: WishlistAttr
}

export interface Wishlists extends JsonApiListResponse {
  data: WishlistAttr[]
}

export interface WishlistResult extends ResultResponse<Wishlist> {}

export interface WishlistsResult extends ResultResponse<Wishlists> {}

export type ListOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }, { is_variant_included?: string }>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; suggestQuery: true },
  { wishlist_token: string } & { is_variant_included?: string }
>

export type DefaultOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }, { is_variant_included?: string }>

export type CreateOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }, { name: string; is_private?: boolean; is_default?: boolean}>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; suggestQuery: true },
  { wishlist_token: string } & { name: string; is_private?: boolean; is_default?: boolean}
>

export type RemoveOptions = WithCommonOptions<{ suggestToken: true }, { wishlist_token: string }>
