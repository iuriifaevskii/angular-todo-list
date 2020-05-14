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
  
  constructor(
    private productListService: ProductListService,
  ) {
    this.title = 'Products';
    this.subTitle = 'My List';
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productListService.fetchProducts()
      .then(res => {
        if (Array.isArray(res)) {
          this.productsList = res;
        } else {
          this.productsList = [];
        }
      });
  }

  addProduct(newProduct) {
    const { title, body } = newProduct;
    this.productListService.createProduct(title, body).then(response => {
      if (response && response.id) {
        this.productsList.unshift({...newProduct, id: response.id});
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
