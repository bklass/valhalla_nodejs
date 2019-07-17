import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Contact } from './contact.model';
import { ContactService } from './contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['nome', 'email', 'showButton', 'editButton', 'deleteButton'];
  contacts: Contact[] = [];
  private contactsSub: Subscription;

  constructor(public contactService: ContactService) {}

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
    this.contactsSub = this.contactService.getContactUpdateListener().subscribe((contacts: Contact[]) => {
        this.contacts = contacts;
    });
  }

  ngOnDestroy() {
    this.contactsSub.unsubscribe();
  }

  deleteContact(contact: Contact){
    if (confirm('Você tem certeza que deseja deletar o usuário ' + contact.Email + '?')) {
      alert(contact.Name + ' removido com sucesso!');
    }
  }
}
