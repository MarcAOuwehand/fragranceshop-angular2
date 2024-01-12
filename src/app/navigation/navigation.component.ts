import {Component, OnInit} from '@angular/core';
import {LoginService} from "../login/login.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.less'
})
export class NavigationComponent implements OnInit{
  isLoggedIn: boolean = false;
  loginChangedSubscription: Subscription;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.getIsLoggedIn();

    this.loginChangedSubscription = this.loginService.loginChanged.subscribe(() => {
      this.isLoggedIn = this.loginService.getIsLoggedIn();
    });
  }

  login(): void {
    this.router.navigate(['login']);
  }

  logout(): void {
    this.loginService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['']);
}

}
