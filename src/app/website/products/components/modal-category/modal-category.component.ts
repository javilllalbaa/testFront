import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ProductService } from 'src/app/core/services/product.service'
import * as userActions from 'src/app/redux/products/product.action';

@Component({
  selector: 'app-modal-category',
  templateUrl: './modal-category.component.html',
  styleUrls: ['./modal-category.component.scss']
})
export class ModalCategoryComponent implements OnInit {

  @Input() closeMyModal: (any) => void;

  newCategory = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });

  constructor(
    private productService: ProductService,
    private store: Store<any>
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.productService.createCategory(this.newCategory.value)
    .subscribe(
      (data) => {
        this.store.dispatch(userActions.resquestDataCategory());
        this.closeMyModal(data)
    })
  }

}
