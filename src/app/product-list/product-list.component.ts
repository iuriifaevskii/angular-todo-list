import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
})

export class ProductListComponent implements OnInit {
  title: string;
  subTitle: string;
  productsList: object[];
  
  constructor(private productListService: ProductListService) {
    this.title = 'Products';
    this.subTitle = 'My List';
  }

  getProducts(): void {
    this.productListService.fetchProducts()
      .then(res => {
        this.productsList = res;
      });
  }

  ngOnInit() {
    this.getProducts();
  }

  addProduct() {
    const newProduct = {
      id: '9999',
      title: 'new Product',
      completed: true,
    };
    this.productsList.unshift(newProduct);
  }
}
