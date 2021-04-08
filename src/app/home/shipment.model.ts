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