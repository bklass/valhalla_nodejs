import { Component } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html'
})
export class ContactEditComponent {

  onSaveContact(){
      alert('Contato Atualizado!');
  }
}
