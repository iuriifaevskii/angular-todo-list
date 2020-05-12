import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductListComponent } from './product-list.component';
import { ProductListService } from './product-list.service';

@NgModule({
  declarations: [
    ProductListComponent
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
