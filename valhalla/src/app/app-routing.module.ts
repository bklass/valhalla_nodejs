import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact/contact-list.component';
import { ContactCreateComponent } from './contact/contact-create/contact-create.component';
import { ContactGetComponent } from './contact/contact-get/contact-get.component';


const routes: Routes = [
  { path: '', component: ContactListComponent },
  { path: 'contact/create', component: ContactCreateComponent },
  { path: 'contact/:id',      component: ContactGetComponent },
  { path: 'contact/edit/:id',      component: ContactGetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
