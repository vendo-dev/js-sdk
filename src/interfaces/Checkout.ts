import type { WithCommonOptions } from './WithCommonOptions'

import { IAddress } from './attributes/Address'
import { IShipment } from './attributes/Shipment'

export type CreateStripeSessionOptions = WithCommonOptions<
  { suggestToken: true },
  {
    success_url: string
    cancel_url: string
  }
>

export type AddPaymentOptions = WithCommonOptions<
  { suggestToken: true; suggestQuery: true },
  {
    payment_method_id: string
    source_attributes?: {
      gateway_payment_profile_id: string
      cc_type?: string
      last_digits?: string
      month?: string
      year?: string
      name: string
    }
  } & {
    source_id?: string
    amount?: number
  }
>

export type SelectShippingMethodOptions = WithCommonOptions<
  { suggestToken: true; suggestQuery: true },
  {
    shipping_method_id: string
    shipment_id?: string
  }
>

export type ShippingRatesOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }>

export type PaymentMethodsOptions = WithCommonOptions<{ suggestToken: true }>

export type RemoveStoreCreditsOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }>

export type AddStoreCreditOptions = WithCommonOptions<
  { suggestToken: true; suggestQuery: true },
  {
    amount: number
  }
>

export type CompleteOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }>

export type AdvanceOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }>

export type OrderUpdateOptions = WithCommonOptions<
  { suggestToken: true; suggestQuery: true },
  { order?: {
      email?: string
      special_instructions?: string
      bill_address_attributes?: IAddress
      ship_address_attributes?: IAddress
      payments_attributes?: AddFullPayment[]
      shipments_attributes?: IShipment[]
    }
  }
>

export type OrderNextOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }>

export interface AddFullPayment {
  payment_method_id: string
  source_attributes?: {
    gateway_payment_profile_id: string
    cc_type?: string
    last_digits?: string
    month?: string
    year?: string
    name: string
  }
}
