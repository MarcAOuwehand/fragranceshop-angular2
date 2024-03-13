import { Component, OnInit } from '@angular/core';
import { Product } from "../../product/product.model";
import { ProductService } from "../../product/product.service";
import { DataStorageService } from "../../data-storage.service";
import { CartService } from "../../cart/cart.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-productoptions',
  templateUrl: './productoptions.component.html',
  styleUrls: ['./productoptions.component.less']
})
export class ProductoptionsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService,
              private dataStorageService: DataStorageService,
              private router: Router
  ) {}

  ngOnInit(): void {
    this.dataStorageService.getProducts().subscribe(
      (products: Product[]) => {
        this.products = products;
      });
  }

  editProduct(product: Product) {
    // Hier kun je de navigatie toevoegen naar de pagina voor het bewerken van het product
    // Bijvoorbeeld: this.router.navigate(['/edit-product', product.id]);
  }

  deleteProduct(product: Product) {
    this.productService.removeProduct(product.productID);
  }

  goToAddProduct() {
    this.router.navigate(['admin/add-product']);
  }
}
