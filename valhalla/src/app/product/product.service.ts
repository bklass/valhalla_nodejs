import { Product } from './product.model';

import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({providedIn: 'root'})
export class ProductService {
  private products: Product[] = [];
  private productUpdated = new Subject<Product[]>();

  apiUrl = 'http://localhost:8080';
  productUrl = `${this.apiUrl}/products`;

  constructor(private http: HttpClient) { }

  getProduct(id: string) {
    return this.http.get<{message: string, data: Product}>(`${this.productUrl}/` + id);
   }

  getProducts() {
    return this.http.get<{status: string, message: string, data: Product[]}>(`${this.productUrl}`).subscribe((productData) => {
      this.products = productData.data;
      this.productUpdated.next([...this.products]);
    });
  }

  getProductUpdateListener() {
    return this.productUpdated.asObservable();
  }

  addProduct(product: Product) {
    this.http.post<{message: string, data: Product}>(`${this.productUrl}`, product).subscribe((res) => {
      this.products.push(res.data);
      this.productUpdated.next([...this.products]);
    }); 
  }

  updateProduct(id: string, product: Product){
    this.http.put(`${this.productUrl}/` + id, product).subscribe(() => {
      const updatedProducts = [...this.products];
      const oldProductIndex =  updatedProducts.findIndex(c => c._id === product._id);
      updatedProducts[oldProductIndex] = product;
      this.products = updatedProducts;
      this.productUpdated.next([...this.products]);
    });
  }

  deleteProduct(product: Product){
    this.http.delete(`${this.productUrl}/` + product._id).subscribe(() => {
      const updatedProducts = this.products.filter(productNew => productNew._id !== product._id);
      this.products = updatedProducts;
      this.productUpdated.next([...this.products]);
    });
  }

}
