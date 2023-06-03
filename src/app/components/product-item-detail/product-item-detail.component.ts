import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent {
  @Input() product: Product;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {
    this.product = {
      id: 0,
      name: '',
      price: 1,
      url: '',
      description: '',
      quantity: 0,
    };
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.product.id = params['id'];
      console.log(this.product.id);
      this.productService.getProduct(this.product.id).subscribe((res) => {
        this.product = res;
      });
    });
  }

  updateProductQuantity(q: string): void {
    const parsedQuantity = parseInt(q);
    this.product.quantity = parsedQuantity;
  }

  addProductToCart(product: Product): void {
    if (product.quantity === 1) {
      alert(`Added ${product.name} to cart`);
    } else {
      alert(`Added ${product.quantity} ${product.name} to cart`);
    }

    this.cartService.addProductToCart(product);
  }
}
