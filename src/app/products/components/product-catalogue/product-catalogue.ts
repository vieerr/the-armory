import { Component, inject } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product-service';
import { ProductInterface } from '../../interfaces/product-interface';

@Component({
  selector: 'app-product-catalogue',
  imports: [ProductCard, CommonModule],
  templateUrl: './product-catalogue.html',
  styleUrl: './product-catalogue.css',
})
export class ProductCatalogue {
  products : ProductInterface[] = [];
  private productService = inject(ProductService);

  constructor() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
