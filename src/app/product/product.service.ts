import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];
  apiUrl: string = 'http://localhost:8081/api/products';
  bearer: string = sessionStorage.getItem("token");

  constructor(private http: HttpClient) {}

  public getProducts(){
    return this.products;
  }

  public setProducts(products: any){
    this.products = products;
  }

  public getProductById(productId: string): Product {
    return this.products.find(product => product.productID === productId);
  }

  public addNewProduct(newProduct: Product) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.bearer);
    return this.http.post(this.apiUrl, newProduct, { headers });
  }

  public removeProduct(productId: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.bearer);
    return this.http.delete(`${this.apiUrl}/${productId}`, { headers });
  }

}
