import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
})

export class ProductListComponent {
  @Input() products: object[];
  @Output() removeProduct = new EventEmitter<number>();
  
  constructor() {}

  removeOne(productID) {
    this.removeProduct.emit(productID)
  }
}
