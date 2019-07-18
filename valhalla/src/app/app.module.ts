import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, 
  ReactiveFormsModule 
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatSelectModule,
  MatTableModule,
  MatListModule,
  MatTabsModule, 
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule
} from '@angular/material';

import { HeaderComponent } from './navigation/header.component';
import { SidenavComponent } from './navigation/sidenav.component';

import { ContactCreateComponent } from './contact/contact-create/contact-create.component';
import { ContactGetComponent } from './contact/contact-get/contact-get.component';
import { ContactListComponent } from './contact/contact-list.component';

import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductListComponent } from './product/product-list.component';
import { ProductGetComponent } from './product/product-get/product-get.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactCreateComponent,
    ContactGetComponent,
    ContactListComponent,
    ProductCreateComponent,
    ProductListComponent,
    ProductGetComponent,
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatListModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
