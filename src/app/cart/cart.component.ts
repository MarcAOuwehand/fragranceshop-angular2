import {Component, OnInit} from '@angular/core';
import {CartService} from "./cart.service";
import {Router} from "@angular/router";
import {LoginService} from "../login/login.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.less'
})
export class CartComponent implements OnInit{
  public cartProducts: any[] = [];
  public isLoggedIn: boolean = false;

  constructor(private cartService: CartService,
              private loginService: LoginService,
              private router: Router) {}

  ngOnInit(): void {
    this.cartProducts = JSON.parse(sessionStorage.getItem('cart'));
    this.isLoggedIn = this.loginService.getIsLoggedIn();
  }

  public getCartProducts(){
    this.cartProducts = this.cartService.getCartItems()
  }

  getTotalPrice(): number {
    return this.cartProducts.reduce((total, item) => total + item.price, 0);
  }

  orderCart(): void {
    if (this.cartProducts.length > 0 && this.isLoggedIn) {
      this.router.navigate(['order']);
    } else {
      if (!this.isLoggedIn) {
        this.router.navigate(['login']);
      }
    }
  }

  clearCart() {
    this.cartService.clearCart();
    this.getCartProducts();
  }

  removeFromCart(product){
    this.cartService.removeFromCart(product)
  }

}
