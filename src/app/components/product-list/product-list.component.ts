import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  title: string = 'Products';
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
    });
  }

  addProductToCart(product: Product): void {
    if (product.quantity === 1) {
      alert(`Added ${product.name} to cart`);
    } else {
      alert(`Added ${product.quantity} ${product.name} to cart`);
    }

    this.cartService.addProductToCart(product);
  }

  markAsFavorite(product: Product): void {
    alert(`${product.name} has been added to favorites.`);
  }
}
