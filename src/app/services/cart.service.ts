import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartKey = 'cart';
  private cartTotalSubject: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);
  cartTotal$ = this.cartTotalSubject.asObservable();

  private calculateTotal(): void {
    const cart = this.getCart();
    let total = 0;
    for (const product of cart) {
      total += product.price * product.quantity;
    }
    this.cartTotalSubject.next(total);
  }

  getCart(): Product[] {
    const cartData = localStorage.getItem(this.cartKey);
    return cartData ? JSON.parse(cartData) : [];
  }

  addProductToCart(product: Product): void {
    const cart = this.getCart();
    cart.push(product);
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
    this.calculateTotal();
  }

  updateProductQuantity(p: Product, quantity: number): void {
    const cart = this.getCart();
    for (let product of cart) {
      if (product.id == p.id) {
        product.quantity = quantity;
      }
    }
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
    this.calculateTotal();
  }

  removeProductFromCart(product: Product): void {
    const cart = this.getCart();
    const updatedCart = cart.filter((p) => p.id !== product.id);
    localStorage.setItem(this.cartKey, JSON.stringify(updatedCart));
    this.calculateTotal();
  }

  clearCart(): void {
    localStorage.removeItem(this.cartKey);
    this.calculateTotal();
  }

  getTotal(): number {
    const cart = this.getCart();
    let total = 0;
    for (const product of cart) {
      total += product.price;
    }
    return total;
  }
}
