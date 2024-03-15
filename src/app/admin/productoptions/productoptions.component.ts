import { Component, OnInit } from '@angular/core';
import { Product } from "../../product/product.model";
import { ProductService } from "../../product/product.service";
import { DataStorageService } from "../../data-storage.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-productoptions',
  templateUrl: './productoptions.component.html',
  styleUrls: ['./productoptions.component.less']
})
export class ProductoptionsComponent implements OnInit {
  products: Product[] = [];
  editingProduct: Product | null = null;

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
    this.editingProduct = { ...product };
  }

  cancelEdit() {
    this.editingProduct = null;
  }

  updateProduct() {
    if (!this.editingProduct) return;

    this.productService.updateProduct(this.editingProduct).subscribe({
      next: () => {
        this.editingProduct = null;
        this.fetchProducts();
      },
      error: (error) => {
        console.error("Can't update the product", error);
        this.editingProduct = null;
      }
    });
  }

  fetchProducts() {
    this.dataStorageService.getProducts().subscribe(
      (products: Product[]) => {
        this.products = products;
      });
  }

  deleteProduct(product: Product) {
    this.productService.removeProduct(product.productID).subscribe({
      next: () => {
        this.products = this.products.filter(p => p.productID !== product.productID);
      },
      error: (error) => {
        console.error("Can't delete the product right now.");
      }
    });
  }

  goToAddProduct() {
    this.router.navigate(['admin/add-product']);
  }
}
