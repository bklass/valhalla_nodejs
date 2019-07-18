import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {
  product: Product;
  private productId: string;

  constructor(public productService: ProductService, public route: ActivatedRoute) {}
  
  ngOnInit(){
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.productId = paramMap.get('id');
      this.productService.getProduct(this.productId).subscribe(res => {
        this.product = res.data;
      });
    });
  }
}
