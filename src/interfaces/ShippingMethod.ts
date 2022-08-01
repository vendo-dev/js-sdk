import { JsonApiDocument, JsonApiListResponse } from './JsonApi'
import { IRelationships } from './Relationships'
import { ResultResponse } from './ResultResponse'

export interface ShippingRateAttr extends JsonApiDocument {
  type: string
  id: string
  attributes: {
    number: string
    free: boolean
    final_price: string
    display_final_price: string
    tracking_url: string
    state: string
    shipped_at: Date
  }
  relationships: IRelationships
}

export interface ShippingRates extends JsonApiListResponse {
  data: ShippingRateAttr[]
}

export interface ShippingRatesResult extends ResultResponse<ShippingRates> {}
