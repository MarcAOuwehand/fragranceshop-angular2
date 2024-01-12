import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {ProductService} from "./product/product.service";
import {map, Observable} from "rxjs";

@Injectable()
export class DataStorageService {
  private apiUrl = 'https://s1142622-iprwc.store:8081/api';
  bearer = sessionStorage.getItem("token");

  constructor(
    private http: HttpClient,
    private productService: ProductService
  ){}


  public getProducts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/products`).pipe(
      map(products => {
        this.productService.setProducts(products.payload);
        return products.payload;
      }))}
}
