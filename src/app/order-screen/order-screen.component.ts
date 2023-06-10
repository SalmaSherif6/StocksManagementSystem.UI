import { Component, OnInit } from '@angular/core';
import { Order } from '../interfaces/order.interface';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order-screen',
  templateUrl: './order-screen.component.html',
  styleUrls: ['./order-screen.component.scss']
})
export class OrderScreenComponent implements OnInit {
  orders: Order[] = [];
  personName: string = '';
  quantity: number = 0;
  price: number = 0;
  stockId: number = 0;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.orderService.getOrders().subscribe(
      orders => {
        this.orders = orders;
      },
      error => {
        console.log("Error in getOrders()", error);
      }
    );
  }

  createOrder(stockId: number, price: number, quantity: number, personName: string): void {
    var order: Order;
    order = {
      stockId: stockId,
      personName: personName,
      price: price,
      quantity: quantity,
    };

    this.orderService.createOrder(order).subscribe(
      () => {
        this.getOrders();
      },
      error => {
        console.log("Error in createOrder()", error);
      }
    );
  }
}
