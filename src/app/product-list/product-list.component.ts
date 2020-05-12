import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
})

export class ProductListComponent implements OnInit {
  title: string;
  subTitle: string;
  productsList: object[];
  productForm;
  
  constructor(
    private productListService: ProductListService,
    private formBuilder: FormBuilder
  ) {
    this.title = 'Products';
    this.subTitle = 'My List';
    this.productForm = this.formBuilder.group({
      title: '',
      body: ''
    });
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productListService.fetchProducts()
      .then(res => {
        this.productsList = res;
      });
  }

  addProduct(newProduct) {
    const { title, body } = newProduct;
    this.productListService.createProduct(title, body).then(status => {
      if (status === 201) {
        this.productsList.unshift(newProduct);
        this.productForm.reset();
      } else {
        console.log('Error: can not create a product');
      }
    });
  }

  removeProduct(productID) {
    this.productListService.deleteProduct(productID).then(status => {
      if (status === 200) {
        this.productsList = this.productsList.filter(product => product['id'] !== productID);
      } else {
        console.log('Error: can not delete');
      }
    });    
  }
}
