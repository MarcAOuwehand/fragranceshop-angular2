import { Injectable } from "@angular/core";
import { OrderModel } from "./order.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders: OrderModel[] = [];
  apiUrl: string = 'https://s1142622-iprwc.store:8081/api/orders';
  bearer: string = sessionStorage.getItem("token") || '';  // Toegevoegd || '' om te zorgen dat bearer altijd een string is

  constructor(private http: HttpClient) {}

  public getOrders() {
    return this.orders;
  }

  public setOrders(orders: any) {
    this.orders = orders;
  }

  public getOrderById(orderId: string): OrderModel | undefined {
    return this.orders.find(order => order.orderID === orderId);
  }

  public placeOrder(newOrder: OrderModel): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.bearer);
    return this.http.post(this.apiUrl, newOrder, { headers });
  }

  public updateOrder(order: OrderModel): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.bearer);
    return this.http.put(`${this.apiUrl}/${order.orderID}`, order, { headers });
  }

  public cancelOrder(orderId: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.bearer);
    return this.http.delete(`${this.apiUrl}/${orderId}`, { headers });
  }
}
