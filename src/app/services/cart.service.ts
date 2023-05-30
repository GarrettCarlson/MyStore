import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartKey = 'cart';

  constructor() {}

  getCart(): Product[] {
    const cartData = localStorage.getItem(this.cartKey);
    return cartData ? JSON.parse(cartData) : [];
  }

  addProductToCart(product: Product): void {
    const cart = this.getCart();
    cart.push(product);
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  removeProductFromCart(product: Product): void {
    const cart = this.getCart();
    const updatedCart = cart.filter(p => p.id !== product.id);
    localStorage.setItem(this.cartKey, JSON.stringify(updatedCart));
  }

  clearCart(): void {
    localStorage.removeItem(this.cartKey);
  }
}
