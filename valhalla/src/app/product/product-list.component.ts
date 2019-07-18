import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['foto','nome', 'banda','preco', 'showButton', 'editButton', 'deleteButton'];
  products: Product[] = [];
  private productsSub: Subscription;

  constructor(public productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts();
    this.productsSub = this.productService.getProductUpdateListener().subscribe((products: Product[]) => {
        this.products = products;
    });
  }

  ngOnDestroy() {
    this.productsSub.unsubscribe();
  }

  deleteProduct(product: Product){
    if (confirm('Você tem certeza que deseja deletar o produto ' + product.name + '?')) {
      this.productService.deleteProduct(product);
      alert(product.name + ' removido com sucesso!');
    }
  }
}
