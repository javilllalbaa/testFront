import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from './../../../../redux'
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as productActions from '../../../../redux/products/product.action';
import { ModalCategoryComponent } from '../modal-category/modal-category.component'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  selectProduct = new FormGroup({
    product_select: new FormControl('', Validators.required),
    category_select: new FormControl('', Validators.required)
  });

  banks$: Observable<any>;
  productType$: Observable<any>
  categoryType$: Observable<any>
  statusCategory: string = ""
  create: boolean = false
  modalRef: any;

  @Output() showProducts = new EventEmitter();


  constructor(
    private store: Store<State>,
    private modalService: NgbModal
  ) {
    this.categoryType$ = this.store.select((data) => data.products.categorys);
    this.store.select((data) => data.user)
    .subscribe( data => {
      if(data['user'] && data['user'].username)
        this.create = data['user'].username == "admin" ? true : false
    })
  }

  categorySelect(event): void {
    if (this.selectProduct.value.category_select == "Agregar Categoria") {
      event.srcElement.blur (); 
      event.preventDefault ();
      this.modalRef = this.modalService.open(ModalCategoryComponent);
      this.modalRef.componentInstance.closeMyModal = (status) => {
        this.statusCategory = status._id ? "Se creo una nueva categoria" : ""
        setTimeout(() => {
          this.statusCategory = ""
        }, 4000);
        this.modalRef.close();
        this.selectProduct.reset();
      }
    } else {
      var category
      this.store.select((data) => data.products.categorys)
        .subscribe((data) => {
          if (data.length > 0) {
            try {
              category = data.filter(p => p.name.trim() == this.selectProduct.value.category_select.trim())[0]._id
              this.showProducts.emit(category); 
            } catch (error) { }
          }
        })
    }
  }

  open(product) {
    this.modalRef = this.modalService.open(ModalCategoryComponent);
    this.modalRef.componentInstance.product = product;
    this.modalRef.componentInstance.closeMyModal = () => {
      this.modalRef.close();
    }
  }

  onSubmit(): void {
  }

}
