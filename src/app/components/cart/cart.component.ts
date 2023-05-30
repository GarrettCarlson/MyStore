import { Component } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  products: Product[] = [];

  constructor () {
    this.products = [];
  }

  addProductToCart(p: Product): void {
    this.products.push(p);
    if (p.quantity == 1) {
      alert(`Added ${p.name} to cart`);
    } else {
      alert(`Added ${p.quantity} ${p.name} to cart`);
    }
  }

  ngOnInit(): void {
    this.products = [];
  }

}
