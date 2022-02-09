import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { AddOrderComponent } from './shared/add-order/add-order.component';
import { GalleryComponent } from './shared/gallery/gallery.component';
import { ContactsComponent } from './shared/contacts/contacts.component';
import { LoginUserComponent } from './shared/login-user/login-user.component';
import { RegistrationUserComponent } from './shared/registration-user/registration-user.component';
import { EnterUserComponent } from './shared/enter-user/enter-user.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainPageComponent,
    ProductPageComponent,
    CartPageComponent,
    DashboardPageComponent,
    GalleryComponent,
    ContactsComponent,
    AddOrderComponent,
    LoginUserComponent,
    RegistrationUserComponent,
    EnterUserComponent
  ],
  imports: [
    BrowserModule,
    CommonModule ,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
