import { Component } from '@angular/core';
import { OrderDetails } from 'src/app/models/orderDetails';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent {
  invoiceDetails: OrderDetails = {
    cartTotal: 0,
    firstName: '',
    lastName: '',
    email: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    paymentAddress: '',
  };

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.invoiceDetails = this.orderService.getOrderDetails();
  }
}
