import { Component, OnInit } from '@angular/core';
import { LoginService } from "../login/login.service";
import { Router } from "@angular/router";
import { AuthService } from "../Auth/AuthService";
import { UserModel } from "./user.model";
import { OrderService } from "../cart/order/order.service";
import { DataStorageService } from "../data-storage.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less']
})
export class AccountComponent implements OnInit {

  userModel: UserModel | undefined;
  orders: any[] = [];
  userOrders: any[] = [];


  constructor(private loginService: LoginService, private router: Router, private authService: AuthService, private orderService: OrderService, private dataStorageService: DataStorageService) {
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
  }

  getOrders(): void {
    this.dataStorageService.getOrders().subscribe(
      payload => {
        this.orders = Array.isArray(payload) ? payload : [];
        this.getOrdersByUserId(this.authService.getUserId());
      },
    );
  }

  getOrdersByUserId(userId: string): void {
    this.userOrders = this.orders.filter(order => order.userID === userId);
  }




  logout() {
    this.loginService.logout();
    this.router.navigate(['']);
  }

  adminLink() {
    this.router.navigate(['admin']);
  }
}
