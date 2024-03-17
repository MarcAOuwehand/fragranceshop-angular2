import { Component, OnInit } from '@angular/core';
import { OrderService } from "../../cart/order/order.service";
import {DataStorageService} from "../../data-storage.service";

@Component({
  selector: 'app-ordermenu',
  templateUrl: './ordermenu.component.html',
  styleUrls: ['./ordermenu.component.less']
})
export class OrdermenuComponent implements OnInit {

  orders: any[] = [];

  constructor(private orderService: OrderService, private dataStorageService: DataStorageService) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.dataStorageService.getOrders().subscribe(
      orders => {
        this.orders = Array.isArray(orders) ? orders : [];
      },
      error => {
        console.error('Error fetching orders:', error);
      }
    );
  }

  deleteOrder(orderId: string): void {
    this.orderService.cancelOrder(orderId).subscribe(() => {
      this.orders = this.orders.filter(order => order.orderID !== orderId);
    }, error => {
      console.error('Error deleting order:', error);
    });
  }
}
