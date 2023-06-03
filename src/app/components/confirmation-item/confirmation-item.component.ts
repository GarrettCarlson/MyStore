import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirmation-item',
  templateUrl: './confirmation-item.component.html',
  styleUrls: ['./confirmation-item.component.css']
})
export class ConfirmationItemComponent {
  @Input() product: Product;
  name: string = '';
  price: number = 0;
  id: number = 0;
  url: string = '';
  description: string = '';
  quantity: number = 0;

  constructor (private cartService: CartService) {
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
}
