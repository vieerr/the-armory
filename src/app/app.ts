import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/general/navbar/navbar";
import { ProductCard } from "./products/components/product-card/product-card";
import { ProductCatalogue } from "./products/components/product-catalogue/product-catalogue";
import { ProductLayout } from "./products/components/product-layout/product-layout";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, ProductCard, ProductCatalogue, ProductLayout],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'the-armory';

  onButtonClick() {
    console.log('Button clicked!');
  }
}
