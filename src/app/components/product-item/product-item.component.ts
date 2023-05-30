import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product;
  @Output() addProductToCart: EventEmitter<Product> = new EventEmitter;

  name: string = '';
  price: number = 0;
  id: number = 0;
  url: string = '';
  description: string = '';
  quantity: number = 0;

  constructor () {
    this.product = {
      id: 0,
      name: '',
      price: 1,
      url: '',
      description: '',
      quantity: 0
    }
  }

  ngOnInit() {}

  updateProductQuantity(q: string): void {
    const parsedQuantity = parseInt(q);
    this.product.quantity = parsedQuantity;
  }
}

