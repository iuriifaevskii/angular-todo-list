import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'create-product-form',
  templateUrl: './create-product-form.component.html',
})

export class CreateProductForm {
    @Output() addProduct = new EventEmitter();

    productForm;
    constructor(private formBuilder: FormBuilder) {
        this.productForm = this.formBuilder.group({
            title: '',
            body: ''
        });
    }
    
    create(newProduct) {
        this.addProduct.emit(newProduct);
        this.productForm.reset();
    }
}