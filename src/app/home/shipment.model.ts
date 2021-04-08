export interface ShipmentDetails{
  shipmentName:string,
  invoiceNo:number,
  orderNo:number,
  trackingNo:number
}
export interface BuyerDetails{
  buyersName: string,
  buyersAddress: string,
  buyersContact:number,
  buyerCountry: string
}
export interface SellerDetails{
  sellerName: string,
  sellerAddress: string,
  sellerContact:number,
  sellerCountry: string
}

export interface Shipments{
  shipmentName:string,
  invoiceNo:number,
  orderNo:number,
  trackingNo:number,
  buyersName: string,
  buyersAddress: string,
  buyersContact:number,
  buyerCountry: string,
  sellerName: string,
  sellerAddress: string,
  sellerContact:number,
  sellerCountry: string
}