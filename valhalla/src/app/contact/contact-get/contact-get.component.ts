import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-contact-get',
  templateUrl: './contact-get.component.html'
})
export class ContactGetComponent implements OnInit {
  contact: Contact;
  private contactId: string;

  constructor(public contactService: ContactService, public route: ActivatedRoute) {}
  
  ngOnInit(){
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.contactId = paramMap.get('id');
      this.contactService.getContact(this.contactId).subscribe(res => {
        this.contact = res.data;
      });
    });
  }
}
