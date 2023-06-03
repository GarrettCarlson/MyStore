import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productDataFile = '../../assets/data_osrs.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productDataFile);
  }
  getProduct(id: number): Observable<Product> {
    return this.http.get<Product[]>(this.productDataFile).pipe(
      map((products: Product[]) => {
        const product = products.find((p: Product) => p.id == id);
        if (product) {
          return product;
        } else {
          console.log(products);
          console.log(id);
          throw new Error('Product not found');
        }
      })
    );
  }
}
