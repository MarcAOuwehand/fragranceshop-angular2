import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../product/product.service";
import {Product} from "../product/product.model";
import {LoginService} from "../login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.less'
})
export class AdminComponent {
  newProduct: any = {}
  newAdmin: any = {};
  constructor(private http: HttpClient, private productService: ProductService, private loginService: LoginService, private router: Router) {}

  addNewProduct(newProduct: Product) {
    this.productService.addNewProduct(newProduct).subscribe(
      (response) => {
    })
    this.router.navigate(['']);
  };

  createAdminAccount(){
    const credentials = {
      email: this.newAdmin.email,
      password: this.newAdmin.password,
      role: "ADMIN"
    };

    this.loginService.registerAdmin(credentials);
  }
}

