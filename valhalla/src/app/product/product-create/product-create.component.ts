import { Component } from '@angular/core';
import { NgForm, FormArray, FormBuilder, FormGroup  } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
 
import { Product } from '../product.model';
// import { Stock } from '../stock.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  private mode = 'create';
  private productId: string;
  product: Product;

  constructor(public productService: ProductService, public route: ActivatedRoute) {}

  ngOnInit(){
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')){
        this.mode = 'edit';
        this.productId = paramMap.get('id');
        this.productService.getProduct(this.productId).subscribe(res => {
          this.product = res.data;
        });
      } else {
        this.mode = 'create';
        this.productId = null;
      }
    });
  }

  onSaveProduct(form: NgForm) {
    if (form.invalid){
      return;
    }
    // const stockList: Stock[] = form.value.Stock;
    const product: Product = {
      _id: null,
      name: form.value.Name,
      band: form.value.Band,
      image: form.value.Img,
      price: form.value.Price,
      stock: null
    }
    if (this.mode === 'create'){
      this.productService.addProduct(product);
    } else {
      this.productService.updateProduct(this.productId,product);
    }    
    form.resetForm();
  }

}
