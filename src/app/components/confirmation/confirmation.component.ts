import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent {
  products: Product[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.products = this.orderService.getOrder();
  }
}
