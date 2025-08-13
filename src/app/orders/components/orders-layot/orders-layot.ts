import { Component } from '@angular/core';
import { Orders } from "../orders/orders";
import { CancelledOrders } from "../cancelled-orders/cancelled-orders";

@Component({
  selector: 'app-orders-layot',
  imports: [Orders, CancelledOrders],
  templateUrl: './orders-layot.html',
  styles: ``
})
export class OrdersLayot {

}
