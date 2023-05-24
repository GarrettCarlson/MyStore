import { Component, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product'
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  title: string = "Products";
  products: Product[] = [];

  constructor (private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => {
      for (let index = 0; index < res.length; index++) {
        let product = res[index];
        console.log(product)
      }
      this.products = res;
    })
  }

  addProductToCart(product: Product, quantity: number): void {
    alert("Product added to cart!")
  }
}
