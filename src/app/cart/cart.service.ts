import { Injectable } from '@angular/core';
import {Product} from "../product/product.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts: Product[] = [];

  addToCart(product: Product) {
    this.setCurrentCartItems()
    this.cartProducts.push(product);
    sessionStorage.setItem('cart', JSON.stringify(this.cartProducts))
  }

  getCartItems() {
    this.cartProducts = JSON.parse(sessionStorage.getItem('cart'));
    console.log(this.cartProducts)
    return this.cartProducts;
  }

  setCurrentCartItems() {
    const storedCart = sessionStorage.getItem('cart');
    if (storedCart) {
      this.cartProducts = JSON.parse(storedCart);
    }
  }


  removeFromCart(product: Product) {
  }

  orderCart(){
    this.clearCart()
  }

  clearCart() {
    this.cartProducts = [];
    sessionStorage.setItem('cart', JSON.stringify(this.cartProducts))
  }

}
