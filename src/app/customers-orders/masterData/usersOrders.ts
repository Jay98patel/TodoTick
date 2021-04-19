import { CustomerOrders } from "../customers-order.model";

export class CustomersOrder{
    public customerOrderDetails:CustomerOrders[]=[
      {id:1,name:"jay",productName:"Asus rog 5"},
      {id:2,name:"J10",productName:"Samsung"},
      {id:3,name:"Suresh",productName:"Nokia"},
      {id:4,name:"John",productName:"MOTOROLA"},
      {id:5,name:"Sam",productName:"IPhone"},
    ]

    public customersConfirmOrders:CustomerOrders[]=[
      {id:6,name:"James",productName:"Shoes"},
    ];
}