import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductListComponent } from './product-list.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { CreateProductForm } from './create-product-form/create-product-form.component';
import { ProductListService } from './product-list.service';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    ProductListComponent,
    SingleProductComponent,
    CreateProductForm,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductListService,
  ],
  bootstrap: [ProductListComponent]
})
export class ProductListModule { }
