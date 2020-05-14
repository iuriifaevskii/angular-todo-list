import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SingleProductComponent } from './product-list/single-product/single-product.component';
import { CreateProductForm } from './create-product-form/create-product-form.component';
import { ProductListPageService } from './product-list-page.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListPageComponent } from './product-list-page.component';

@NgModule({
  declarations: [
    ProductListComponent,
    SingleProductComponent,
    CreateProductForm,
    ProductListComponent,
    ProductListPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductListPageService,
  ],
  bootstrap: [ProductListComponent]
})
export class ProductListPageModule { }
