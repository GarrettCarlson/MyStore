import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  products: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.products = this.cartService.getProducts();
  }
}
