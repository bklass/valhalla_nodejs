import { Contact } from './contact.model';

import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({providedIn: 'root'})
export class ContactService {
  private contacts: Contact[] = [];
  private contactUpdated = new Subject<Contact[]>();

  apiUrl = 'http://localhost:8080';
  contactUrl = `${this.apiUrl}/contacts`;

  constructor(private http: HttpClient) { }

  getContact(id: string) {
    return this.http.get<{message: string, data: Contact}>(`${this.contactUrl}/` + id);
   }

  getContacts() {
    return this.http.get<{status: string, message: string, contacts: Contact[]}>(`${this.contactUrl}`).subscribe((contactData) => {
      this.contacts = contactData.contacts;
      this.contactUpdated.next([...this.contacts]);
    });
  }

  getContactUpdateListener() {
    return this.contactUpdated.asObservable();
  }

  addContact(contact: Contact) {
    this.http.post<{message: string, data: Contact}>(`${this.contactUrl}`, contact).subscribe((res) => {
      this.contacts.push(res.data);
      this.contactUpdated.next([...this.contacts]);
    }); 
  }

  updateContact(id: string, contact: Contact){
    this.http.put(`${this.contactUrl}/` + id, contact).subscribe(() => {
      const updatedContacts = [...this.contacts];
      const oldContactIndex =  updatedContacts.findIndex(c => c._id === contact._id);
      updatedContacts[oldContactIndex] = contact;
      this.contacts = updatedContacts;
      this.contactUpdated.next([...this.contacts]);
    });
  }

  deleteContact(contact: Contact){
    this.http.delete(`${this.contactUrl}/` + contact._id).subscribe(() => {
      const updatedContacts = this.contacts.filter(contactNew => contactNew._id !== contact._id);
      this.contacts = updatedContacts;
      this.contactUpdated.next([...this.contacts]);
    });
  }

}
