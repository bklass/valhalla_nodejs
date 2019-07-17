import { Component } from '@angular/core';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html'
})
export class ProductGetComponent {
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
