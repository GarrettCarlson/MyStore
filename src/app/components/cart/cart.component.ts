import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  products: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.products = this.cartService.getCart();
  }

  removeProduct(product: Product): void {
    this.cartService.removeProductFromCart(product);
    this.products = this.cartService.getCart();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.products = [];
  }
}
