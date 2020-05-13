import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'single-product',
  templateUrl: './single-product.component.html',
})

export class SingleProductComponent {
    @Output() removeProduct = new EventEmitter<number>();

    @Input() productID: number;
    @Input() productTitle: string;
    @Input() productBody: string;

    remove(productID) {
        this.removeProduct.emit(productID);
    }
}