import type { JsonApiDocument, JsonApiSingleResponse } from './JsonApi'
import type { IRelationships } from './Relationships'
import type { ResultResponse } from './ResultResponse'
import type { WithCommonOptions } from './WithCommonOptions'

export interface WishedItemAttr extends JsonApiDocument {
  type: string
  id: string
  attributes: {
    variant_id: string
    quantity: number
  }
  relationships: IRelationships
}

export interface WishedItem extends JsonApiSingleResponse {
  data: WishedItemAttr
}

export interface WishedItemResult extends ResultResponse<WishedItem> {}

export type AddWishedItemOptions = WithCommonOptions<
  { suggestToken: true; suggestQuery: true },
  { wishlist_token: string } & { variant_id: string; quantity: number }
>

export type UpdateWishedItemOptions = WithCommonOptions<
  { suggestToken: true; suggestQuery: true },
  { wishlist_token: string; id: string } & { quantity: number }
>

export type RemoveWishedItemOptions = WithCommonOptions<{ suggestToken: true }, { wishlist_token: string; id: string }>
