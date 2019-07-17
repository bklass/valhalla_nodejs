import { Component } from '@angular/core';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html'
})
export class ProductEditComponent {
  productName = '';
  productBand = '';
  productImg = '';
  productSize = '';
  productQuantity = '';
  productPrice = '';


  onSaveContact(){
      alert('Dados atualizados!');
  }
}
