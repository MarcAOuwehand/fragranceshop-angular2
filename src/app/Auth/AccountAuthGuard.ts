import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {LoginService} from "../login/login.service";

@Injectable({
  providedIn: 'root'
})
export class AccountAuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.loginService.getIsLoggedIn()) {
      return true
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
