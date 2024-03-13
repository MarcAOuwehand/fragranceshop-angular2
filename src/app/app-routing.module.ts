import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {StoreComponent} from "./store/store.component";
import {CartComponent} from "./cart/cart.component";
import {LoginComponent} from "./login/login.component";
import {OrderComponent} from "./cart/order/order.component";
import {ProductComponent} from "./product/product.component";
import {AdminComponent} from "./admin/admin.component";
import {AccountComponent} from "./account/account.component";
import {CartAuthGuard} from "./Auth/CartAuth.guard";
import {AccountAuthGuard} from "./Auth/AccountAuthGuard";
import {AdminGuard} from "./Auth/AdminAuth.guard";
import {ProductoptionsComponent} from "./admin/productoptions/productoptions.component";
import {CreateproductComponent} from "./admin/createproduct/createproduct.component";

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'store', component: StoreComponent},
  { path:'cart', component: CartComponent},
  { path:'login', component: LoginComponent},
  { path:'order', component: OrderComponent, canActivate: [CartAuthGuard]},
  { path: 'product/:id', component: ProductComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard]},
  { path: 'account', component: AccountComponent, canActivate: [AccountAuthGuard]},
  { path: 'admin/products', component: ProductoptionsComponent, canActivate: [AdminGuard]},
  { path: 'admin/add-product', component: CreateproductComponent, canActivate: [AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
