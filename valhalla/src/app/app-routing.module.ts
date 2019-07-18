import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact/contact-list.component';
import { ContactCreateComponent } from './contact/contact-create/contact-create.component';
import { ContactGetComponent } from './contact/contact-get/contact-get.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductGetComponent } from './product/product-get/product-get.component';
import { ProductListComponent } from './product/product-list.component';


const routes: Routes = [
  { path: '', component: ContactListComponent },
  { path: 'contacts', component: ContactListComponent },
  { path: 'contact/create', component: ContactCreateComponent },
  { path: 'contact/:id',      component: ContactGetComponent },
  { path: 'contact/edit/:id',      component: ContactCreateComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'product/create', component: ProductCreateComponent },
  { path: 'product/:id',      component: ProductGetComponent },
  { path: 'product/edit/:id',      component: ProductCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
