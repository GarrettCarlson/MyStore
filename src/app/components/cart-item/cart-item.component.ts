import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input() product: Product;
  @Output() removeProductFromCart: EventEmitter<Product> = new EventEmitter();

  name: string = '';
  price: number = 0;
  id: number = 0;
  url: string = '';
  description: string = '';
  quantity: number = 0;

  constructor(private cartService: CartService) {
    this.product = {
      id: 0,
      name: '',
      price: 1,
      url: '',
      description: '',
      quantity: 0,
    };
  }

  ngOnInit() {}

  onQuantityChange(event: number, product: Product): void {
    const quantity = event;
    this.cartService.updateProductQuantity(product, quantity);
  }
}
