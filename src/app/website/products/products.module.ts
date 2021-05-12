import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { FilterComponent } from './components/filter/filter.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { WebsiteModule } from '../website.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ModalCardComponent } from './components/modal-card/modal-card.component';
import { ModalCategoryComponent } from './components/modal-category/modal-category.component';


@NgModule({
  declarations: [
    FilterComponent, 
    ProductListComponent, ProductCardComponent, ModalCardComponent, ModalCategoryComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    WebsiteModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
