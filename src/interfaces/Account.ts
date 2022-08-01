import type { IAddress } from './attributes/Address'
import type { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi'
import type { IRelationships } from './Relationships'
import type { ResultResponse } from './ResultResponse'
import type { WithCommonOptions } from './WithCommonOptions'

export interface AccountAttr extends JsonApiDocument {
  data: {
    id: string
    type: string
    attributes: {
      email: string
      store_credits: number
      completed_orders: number
    }

    relationships: IRelationships
  }
}

export interface IAccount extends JsonApiSingleResponse {
  data: AccountAttr
}

export interface IAccountResult extends ResultResponse<IAccount> {}

export interface AccountAddressAttr extends JsonApiDocument {
  attributes: IAddress
}

export interface AccountAddressResponse extends JsonApiSingleResponse {
  data: AccountAddressAttr
}

export interface AccountAddressesResponse extends JsonApiListResponse {
  data: AccountAddressAttr[]
}

export interface AccountAddressResult extends ResultResponse<AccountAddressResponse> {}

export interface AccountAddressesResult extends ResultResponse<AccountAddressesResponse> {}

export type AccountInfoOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }>

export type CreditCardsListOptions = WithCommonOptions<{
  suggestToken: true
  onlyAccountToken: true
  suggestQuery: true
}>

export type DefaultCreditCardOptions = WithCommonOptions<{
  suggestToken: true
  onlyAccountToken: true
  suggestQuery: true
}>

export type RemoveCreditCardOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type CompletedOrdersListOptions = WithCommonOptions<{
  suggestToken: true
  onlyAccountToken: true
  suggestQuery: true
}>

export type CompletedOrderOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { order_number: string }
>

export type CreateOptions = WithCommonOptions<
  null,
  {
    user: {
      email: string
      first_name: string
      last_name: string
      password: string
      password_confirmation: string
    }
  }
>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  {
    user: {
      email: string
      first_name: string
      last_name: string
      bill_address_id: string
      ship_address_id: string
      password: string
      password_confirmation: string
    }
  }
>

export type AddressesListOptions = WithCommonOptions<{ suggestToken: true; onlyAccountToken: true }>

export type ShowAddressOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type CreateAddressOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { address: IAddress }
>

export type RemoveAddressOptions = WithCommonOptions<{ suggestToken: true; onlyAccountToken: true }, { id: string }>

export type UpdateAddressOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { address: IAddress }
>
