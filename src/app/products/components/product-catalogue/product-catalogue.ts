import { Component } from '@angular/core';
import { ProductCard } from "../product-card/product-card";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-catalogue',
  imports: [ProductCard, CommonModule],
  templateUrl: './product-catalogue.html',
  styleUrl: './product-catalogue.css'
})
export class ProductCatalogue {
  products = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 100, imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 200, imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' },
    { id: 3, name: 'Product 3', description: 'Description 3', price: 300, imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' },
    { id: 4, name: 'Product 4', description: 'Description 4', price: 400, imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' },
    { id: 5, name: 'Product 5', description: 'Description 5', price: 500, imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' },
    { id: 6, name: 'Product 6', description: 'Description 6', price: 600, imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' }
  ];
}
