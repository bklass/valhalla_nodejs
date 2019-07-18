import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';

import { ContactService } from '../contact.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {
  private mode = 'create';
  private contactId: string;
  contact: Contact;

  constructor(public contactService: ContactService, public route: ActivatedRoute) {}
  
  ngOnInit(){
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')){
        this.mode = 'edit';
        this.contactId = paramMap.get('id');
        this.contactService.getContact(this.contactId).subscribe(res => {
          this.contact = res.data;
        });
      } else {
        this.mode = 'create';
        this.contactId = null;
      }
    });
  }

  onSaveContact(form: NgForm) {
    if (form.invalid){
      return;
    }
    const contact: Contact = {
      _id: null,
      name: form.value.Name,
      email: form.value.Email,
      gender: form.value.Gender,
      phone: form.value.Phone,
      password: form.value.Password
    }
    if (this.mode === 'create'){
      this.contactService.addContact(contact);
    } else {
      this.contactService.updateContact(this.contactId,contact);
    }    
    form.resetForm();
  }
}
