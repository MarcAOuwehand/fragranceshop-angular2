import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {LoginService} from "../login/login.service";
import {CartService} from "../cart/cart.service";

@Injectable({
  providedIn: 'root'
})
export class CartAuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router, private cartService: CartService) {
  }

  canActivate(): boolean {
    if (!this.loginService.getIsLoggedIn()) {
      this.router.navigate(['login']);
      return false;
    }

    if (this.cartService.getCartItems().length === 0) {
      this.router.navigate(['cart']);
      return false;
    }

    return true;
  }
}
