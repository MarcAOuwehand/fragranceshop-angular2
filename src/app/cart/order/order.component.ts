import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from './order.service';
import { OrderModel } from './order.model';
import {CartService} from "../cart.service";
import {AuthService} from "../../Auth/AuthService";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.less']
})
export class OrderComponent implements OnInit {
  cartProducts: any[] = [];

  constructor(private cartService: CartService, private orderService: OrderService, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.cartProducts = JSON.parse(sessionStorage.getItem('cart'));
  }

  getTotalPrice(): number {
    return this.cartProducts.reduce((total, item) => total + item.price, 0);
  }

  confirmOrder() {
    console.log(this.orderService.getOrders())
    const order: OrderModel = {
      orderID: "",
      userID: this.authService.getUserId()
    };

    this.orderService.placeOrder(order).subscribe(
      (response) => {
        this.cartService.orderCart();
        this.router.navigate(['']);
      },
    );
  }
}
