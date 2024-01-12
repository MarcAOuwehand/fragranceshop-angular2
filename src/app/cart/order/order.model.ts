import {Product} from "../../product/product.model";

export class OrderModel {
  public orderID: string
  public userID: string;

  constructor(orderID: string, userID: string) {
    this.orderID = orderID;
    this.userID = userID;
  }
}
