import { Component } from '@angular/core';
import {ProductService} from "../../product/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrl: './createproduct.component.less'
})
export class CreateproductComponent {
  newProduct = {
    productID: null,
    name: '',
    brand: '',
    price: null,
    description: '',
    img_path: ''
  };

  constructor(private productService: ProductService, private router: Router) {}

  onSubmit() {
    this.productService.addNewProduct(this.newProduct).subscribe(() => {
      this.router.navigate(['/store']);
    });
  }

}
