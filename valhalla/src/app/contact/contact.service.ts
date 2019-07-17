import { Contact } from './contact.model';

import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ContactService {
  private contacts: Contact[] = [];
  private contactUpdated = new Subject<Contact[]>();

  apiUrl = 'http://localhost:8080';
  contactUrl = `${this.apiUrl}/contacts`;

  constructor(private http: HttpClient) { }

  addContact(contact: Contact) {
    this.http.post(`${this.contactUrl}`, contact).subscribe((res) => {
      console.log(res);
      this.contacts.push(contact);
      this.contactUpdated.next([...this.contacts]);
    }); 
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

  deleteContact(contact: Contact){
    this.http.delete(`${this.contactUrl}/` + contact._id).subscribe(() => {
      const updatedContacts = this.contacts.filter(contactNew => contactNew._id !== contact._id);
      this.contacts = updatedContacts;
      this.contactUpdated.next([...this.contacts]);
    });
  }

}
