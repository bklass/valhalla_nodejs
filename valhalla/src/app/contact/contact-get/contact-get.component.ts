import { Component } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-get',
  templateUrl: './contact-get.component.html'
})
export class ContactGetComponent {
  contactName = '';
  contactEmail = '';
  contactGender = '';
  contactPhone = '';
  }
