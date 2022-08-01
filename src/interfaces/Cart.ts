import type { WithCommonOptions } from './WithCommonOptions'

export type ShowOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }>

export type CreateOptions = WithCommonOptions<{
  suggestToken: true
  onlyAccountToken: true
  optionalToken: true
  suggestQuery: true
}>

export type AddItemOptions = WithCommonOptions<
  {
    suggestToken: true
    suggestQuery: true
  },
  {
    variant_id: string
    quantity: number
    options?: {
      [key: string]: string
    }   
  }
>

export type RemoveItemOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }, { id: string }>

export type EmptyCartOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }>

export type RemoveOptions = WithCommonOptions<{ suggestToken: true }>

export type SetQuantityOptions = WithCommonOptions<
  { suggestToken: true; suggestQuery: true },
  {
    line_item_id: string
    quantity: number
  }
>

export type ApplyCouponCodeOptions = WithCommonOptions<
  { suggestToken: true; suggestQuery: true },
  { coupon_code: string }
>

export type RemoveCouponCodeOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }, { code?: string }>

export type RemoveAllCouponsOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }>

export type EstimateShippingRatesOptions = WithCommonOptions<
  { suggestToken: true; suggestQuery: true },
  { country_iso: string }
>

export type AssociateGuestCartOptions = WithCommonOptions<
  { suggestToken: true; suggestQuery: true },
  { guest_order_token: string }
>

export type ChangeCurrencyOptions = WithCommonOptions<
  { suggestToken: true; suggestQuery: true },
  { new_currency: string }
>
