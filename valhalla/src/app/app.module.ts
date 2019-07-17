import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatSelectModule,
  MatTableModule
} from '@angular/material';

import { ContactCreateComponent } from './contact/contact-create/contact-create.component';
import { ContactEditComponent } from './contact/contact-edit/contact-edit.component';
import { ContactGetComponent } from './contact/contact-get/contact-get.component';
import { ContactListComponent } from './contact/contact-list.component';

import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductGetComponent } from './product/product-get/product-get.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactCreateComponent,
    ContactEditComponent,
    ContactGetComponent,
    ContactListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductGetComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
