import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './AuthService';
import {AccountComponent} from "../account/account.component";
import {LoginService} from "../login/login.service";
import {Observable, of, switchMap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  role: string;

  constructor(private authService: AuthService,
              private router: Router,
              private loginService: LoginService) {
  }

  canActivate(): Observable<boolean> {
    return this.authService.getUserRole().pipe(
      switchMap(role => {
        this.role = role;

        if (this.loginService.getIsLoggedIn() && this.role === "ADMIN") {
          return of(true);
        } else {
          this.router.navigate(['']);
          return of(false);
        }
      })
    );
  }
}
