import { Component, OnInit } from '@angular/core';
import { LoginService } from "../login/login.service";
import { Router } from "@angular/router";
import { AuthService } from "../Auth/AuthService";
import { UserModel } from "./user.model";
import {OrderService} from "../cart/order/order.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less']
})
export class AccountComponent implements OnInit {

  userModel: UserModel | undefined;
  orders: any[] = [];
  userOrders: any[] = [];


  constructor(private loginService: LoginService, private router: Router, private authService: AuthService, private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.authService.getUser().subscribe(
      userModel => {
        this.userModel = userModel;
      },
      error => {
        console.error('Error:', error);
      }
    );

    this.getOrders();
    this.getOrdersByUserId(this.authService.getUserId());
  }

  getOrders(): void {
    this.orderService.getOrders().subscribe(
      payload => {
        this.orders = Array.isArray(payload) ? payload : [];
        console.log('Orders:', this.orders);
      },
    );
  }

  getOrdersByUserId(userId: string): void {
    console.log('UserID:', userId);
    console.log('All Orders:', this.orders);

    for (let order of this.orders) {
      console.log('Checking Order:', order);
      if (order.userid === userId) {
        this.userOrders.push(order);
      }
    }

    console.log('User Orders:', this.userOrders);
  }


  logout() {
    this.loginService.logout();
    this.router.navigate(['']);
  }

  adminLink() {
    this.router.navigate(['admin']);
  }
}
