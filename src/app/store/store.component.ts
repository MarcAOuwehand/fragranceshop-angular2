import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product/product.service";
import {Product} from "../product/product.model";
import {DataStorageService} from "../data-storage.service";
import {CartService} from "../cart/cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrl: './store.component.less'
})
export class StoreComponent implements OnInit{
  products: Product[] = [];

  constructor(private productService: ProductService,
              private dataStorageService: DataStorageService,
              private cartService: CartService,
              private router: Router
  ) {}

  ngOnInit(): void {
    this.dataStorageService.getProducts().subscribe(
      (products: Product[]) => {
        this.products = products;
      })}

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

  goToProduct(productId: string) {
    this.router.navigate(['/product', productId]);
  }

}


