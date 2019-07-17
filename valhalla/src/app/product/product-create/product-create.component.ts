import { Component } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html'
})
export class ProductCreateComponent {
  productName = '';
  productBand = '';
  productImg = '';
  productSize = '';
  productQuantity = '';
  productPrice = '';


  onSaveContact(){
      alert('Produto adicionado!');
  }
}
