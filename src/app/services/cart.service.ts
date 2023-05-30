import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[] = [];

  constructor() {}

  addProduct(product: Product): void {
    this.products.push(product);
    console.log(`${product.quantity} of ${product.name} added to cart`)
    console.log(`${this.products}`);
  }

  getProducts(): Product[] {
    return this.products;
  }
}
