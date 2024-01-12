import { Component, OnInit } from '@angular/core';
import { Product } from "../product/product.model";
import { ProductService } from "../product/product.service";
import { DataStorageService } from "../data-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  randomProduct: Product | undefined;

  constructor(
    private productService: ProductService,
    private dataStorageService: DataStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dataStorageService.getProducts().subscribe(
      (products: Product[]) => {
        this.products = products;
        this.setRandomProduct();
      }
    );
  }

  setRandomProduct(): void {
    const randomIndex = Math.floor(Math.random() * this.products.length);
    this.randomProduct = this.products[randomIndex];
  }

  goToProduct(productId: string) {
    this.router.navigate(['/product', productId]);
  }
}
