import { Routes } from '@angular/router';
import { ProductDetails } from './products/components/product-details/product-details';
import { ProductLayout } from './products/components/product-layout/product-layout';
import { ShoppingCart } from './shopping-cart/components/shopping-cart/shopping-cart';
import { Checkout } from './billing/components/order-details/checkout';
import { OrderConfirmationComponent } from './billing/components/confirmation/confirmation';
import { OrdersLayot } from './orders/components/orders-layot/orders-layot';
export const routes: Routes = [
  {path: 'orders', component: OrdersLayot},
  { path: 'cart', component: ShoppingCart },
  { path: 'checkout/confirmation', component: OrderConfirmationComponent },
  { path: 'checkout', component: Checkout },
  { path: 'products/:id', component: ProductDetails },
  { path: '', component: ProductLayout },
];
