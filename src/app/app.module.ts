import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { ProductComponent } from './product/product.component';
import {DataStorageService} from "./data-storage.service";
import {ProductService} from "./product/product.service";
import {HttpClientModule} from "@angular/common/http";
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import { AdminComponent } from './admin/admin.component';
import { OrderComponent } from './cart/order/order.component';
import { AccountComponent } from './account/account.component';
import {JWT_OPTIONS, JwtHelperService} from "@auth0/angular-jwt";
import { PromocodeComponent } from './cart/promocode/promocode.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    StoreComponent,
    ProductComponent,
    CartComponent,
    LoginComponent,
    AdminComponent,
    OrderComponent,
    AccountComponent,
    PromocodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpClientModule,
    DataStorageService,
    ProductService,
    JwtHelperService, {provide: JWT_OPTIONS, useValue: JWT_OPTIONS}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
