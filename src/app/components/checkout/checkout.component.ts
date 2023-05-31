import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
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

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartTotal = this.cartService.getTotal();
  }

  onSubmit(): void {
    alert(`Order placed.`);
  }

}
