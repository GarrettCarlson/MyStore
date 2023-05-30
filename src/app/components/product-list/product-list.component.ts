import { Component, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  title: string = 'Products';
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
    });
  }

  addProductToCart(p: Product): void {
    if (p.quantity == 1) {
      alert(`Added ${p.name} to cart`);
    } else {
      alert(`Added ${p.quantity} ${p.name} to cart`);
    }
  }

  markAsFavorite(p: Product): void {
    alert(`${p.name} has been added to favorites.`);
  }

}
