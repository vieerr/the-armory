import { Component } from '@angular/core';
import { cartService } from '../../../shopping-cart/cart-service';
@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  cartCount = 0;
  cartTotal = 0;
  userName = 'Knight'; // Would normally come from auth service

  constructor() {
    cartService.cart$.subscribe((items) => {
      this.cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
      this.cartTotal = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    });
  }
}
