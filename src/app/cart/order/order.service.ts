import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderModel } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  apiUrl: string = 'http://localhost:8081/api/orders';
  bearer: string = sessionStorage.getItem('token');

  constructor(private http: HttpClient) {}

  placeOrder(order: OrderModel): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.bearer}`
    });

    return this.http.post(this.apiUrl, order, { headers });
  }

  getOrders(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.bearer}`
    });

    return this.http.get(this.apiUrl, { headers });
  }

  getOrdersByUserId(userId: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.bearer}`
    });

    return this.http.get(`${this.apiUrl}/user/${userId}`, { headers });
  }
}
