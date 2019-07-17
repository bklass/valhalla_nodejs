import { Contact } from './contact.model';

import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ContactService {
  private contacts: Contact[] = [];
  private contactUpdated = new Subject<Contact[]>();

  apiUrl = 'http://localhost:3000';
  contactUrl = `${this.apiUrl}/contacts`;


  addContact(contact: Contact) {
    this.contacts.push(contact);
    this.contactUpdated.next([...this.contacts]);
  }

  getContacts() {
    return [...this.contacts];
  }

  getContactUpdateListener() {
    return this.contactUpdated.asObservable();
  }


}
