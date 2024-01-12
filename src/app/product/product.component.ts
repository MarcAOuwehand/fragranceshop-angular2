import {Component, OnInit} from '@angular/core';
import {Product} from "./product.model";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "./product.service";
import {CartService} from "../cart/cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.less'
})
export class ProductComponent implements OnInit{
  productId: string;
  product: Product;

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      this.product = this.productService.getProductById(this.productId);
    });
  }

  addToCart(){
    this.cartService.addToCart(this.product);
  }

}
