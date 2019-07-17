import { Component } from '@angular/core';
import { Contact } from '../contact.model';

import { ContactService } from '../contact.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent {

  constructor(public contactService: ContactService) {}

  onSaveContact(form: NgForm) {
    if (form.invalid){
      return;
    }
    const contact: Contact = {
      Name: form.value.Name,
      Email: form.value.Email,
      Gender: form.value.Gender,
      Phone: form.value.Phone,
      Password: form.value.Password
    }

    this.contactService.addContact(contact);
  }
}
