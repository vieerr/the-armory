import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductInterface as Product } from '../interfaces/product-interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = '/api/products';

  private mockProducts: Product[] = [
    {
      id: 1,
      name: 'Sword of Destiny',
      description: 'A legendary sword with magical properties.',
      price: 100,
      rating: 4,
      imageUrl: 'sword.jpg',
      details: [
        'Forged in the fires of Mount Doom',
        'Increases attack power by 20%',
        'Grants the wielder enhanced agility',
      ]
    },
    {
      id: 2,
      name: 'Shield of Valor',
      description: 'A sturdy shield that can withstand any attack.',
      price: 75,
      rating: 4,
      imageUrl: 'shield.jpg',
      details: [
        'Made from the strongest steel',
        'Reduces damage taken by 15%',
        'Enhances defense against magical attacks',
      ]
    },
    {
      id: 3,
      name: 'Helmet of Wisdom',
      description: 'A helmet that grants the wearer enhanced intelligence.',
      price: 50,
      rating: 4.5,
      imageUrl: 'helmet.jpg',
      details: [
        'Crafted by the ancient sages',
        'Increases intelligence by 10 points',
        'Allows the wearer to understand ancient languages',
      ]
    },
  ];

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    // return this.http.get<Product[]>(this.apiUrl);
    // For mock data, return the mockProducts array as an observable
    return new Observable((observer) => {
      observer.next(this.mockProducts);
      observer.complete();
    });
  }

  getProduct(id: string): Observable<Product> {
    // return this.http.get<Product>(`${this.apiUrl}/${id}`);
    // For mock data, find the product by id in the mockProducts array
    return new Observable((observer) => {
      const product = this.mockProducts.find((p) => p.id === +id);
      if (product) {
        observer.next(product);
      } else {
        observer.error('Product not found');
      }
      observer.complete();
    });
  }

  createProduct(product: Product): Observable<Product> {
    return new Observable((observer) => {
      const newProduct = { ...product, id: this.mockProducts.length + 1 };
      this.mockProducts.push(newProduct);
      observer.next(newProduct);
      observer.complete();
    });
  }

  updateProduct(id: string, product: Product): Observable<Product> {
    return new Observable((observer) => {
      const index = this.mockProducts.findIndex((p) => p.id === +id);
      if (index !== -1) {
        this.mockProducts[index] = { ...product, id: +id };
        observer.next(this.mockProducts[index]);
      } else {
        observer.error('Product not found');
      }
      observer.complete();
    });
  }

  deleteProduct(id: string): Observable<void> {
    return new Observable((observer) => {
      const index = this.mockProducts.findIndex((p) => p.id === +id);
      if (index !== -1) {
        this.mockProducts.splice(index, 1);
        observer.next();
      } else {
        observer.error('Product not found');
      }
      observer.complete();
    });
  }
}
