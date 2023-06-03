import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { StatesService } from 'src/app/services/states.service';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { OrderDetails } from 'src/app/models/orderDetails';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  cartTotal: number = 0;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  addressLine1: string = '';
  addressLine2: string = '';
  city: string = '';
  state: string = '';
  zipCode: string = '';
  paymentAddress: string = '';
  US_STATES: string[] = [];

  constructor(
    private cartService: CartService,
    private router: Router,
    private statesService: StatesService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.cartTotal = this.cartService.getTotal();
    this.US_STATES = this.statesService.getStates();
  }

  onSubmit(): void {
    alert(`Order placed.`);
    this.orderService.addOrderDetails(this.getOrderDetails());
    this.orderService.addCartToOrder();
    this.router.navigate(['/confirmation']);
  }

  getOrderDetails(): OrderDetails {
    const orderDetails: OrderDetails = {
      cartTotal: this.cartTotal,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      addressLine1: this.addressLine1,
      addressLine2: this.addressLine2,
      city: this.city,
      state: this.state,
      zipCode: this.zipCode,
      paymentAddress: this.paymentAddress,
    };

    return orderDetails;
  }
}
