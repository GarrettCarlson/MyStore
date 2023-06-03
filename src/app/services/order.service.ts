import { Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { Product } from '../models/product';
import { OrderDetails } from '../models/orderDetails';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orderKey = 'order';
  private orderDetailsKey = 'orderdetails';

  constructor(private cartService: CartService) {}

  addOrderDetails(o: OrderDetails): void {
    localStorage.setItem(this.orderDetailsKey, JSON.stringify(o));
  }

  addCartToOrder(): void {
    const cart = this.cartService.getCart();
    this.cartService.clearCart();
    localStorage.setItem(this.orderKey, JSON.stringify(cart));
  }

  getOrder(): Product[] {
    const orderData = localStorage.getItem(this.orderKey);
    return orderData ? JSON.parse(orderData) : [];
  }

  getOrderDetails(): OrderDetails {
    const orderDetails = localStorage.getItem(this.orderDetailsKey);
    return orderDetails ? JSON.parse(orderDetails) : [];
  }

  getTotal(): number {
    const cart = this.getOrder();
    let total = 0;
    for (const product of cart) {
      total += product.price;
    }
    return total;
  }
}
