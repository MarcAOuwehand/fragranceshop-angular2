import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { ProductService } from "./product/product.service";
import { OrderService } from "./cart/order/order.service";

@Injectable()
export class DataStorageService {
  private apiUrl = 'https://s1142622-iprwc.store:8081/';

  constructor(
    private http: HttpClient,
    private productService: ProductService,
    private orderService: OrderService
  ) {}

  public getProducts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/products`).pipe(
      map(products => {
        this.productService.setProducts(products.payload);
        return products.payload;
      })
    );
  }

  public getOrders(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem("token")}`
    });

    return this.http.get<any>(`${this.apiUrl}/orders`, { headers }).pipe(
      map(orders => {
        this.orderService.setOrders(orders.payload);
        return orders.payload;
      })
    );
  }
}
