import Shop from '~/types/Shop'

export interface ProductPrice {
  name: string,
  value: number,
  formattedValue: string,
}

export interface ProductTransit {
  days: number
}

export interface Product {
  name: string,
  url: string,
  picture: string,
  quantity: number,
  additionalQuantity: number,
  deliveryTimeFromAdditional: number;
  deliveryTimeFromAdditionalFormatted: string;
  prices: ProductPrice[],
  availableStores: Shop[],
  transit: ProductTransit | null
}
