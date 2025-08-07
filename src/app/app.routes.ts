import { Routes } from '@angular/router';
import { ProductDetails } from './products/components/product-details/product-details';
import { ProductLayout } from './products/components/product-layout/product-layout';

export const routes: Routes = [

  { path: 'products/:id', component: ProductDetails },
  { path: '', component: ProductLayout },

];
