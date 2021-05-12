import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as userActions from 'src/app/redux/products/product.action';
import { ProductService } from 'src/app/core/services/product.service'

@Component({
  selector: 'app-modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.scss']
})
export class ModalCardComponent implements OnInit {

  @Input() closeMyModal: (any) => void;
  @Input() category: string;
  @Output() close: EventEmitter<any> = new EventEmitter();

  newProduct = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    vat: new FormControl('', Validators.required)
  });

  constructor(
    private productService: ProductService,
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    console.log("category...", this.category)
  }

  onSubmit(): void {
    this.newProduct.value['category'] = this.category
    this.productService. createProduct(this.newProduct.value)
    .subscribe(
      (data) => {
        this.store.dispatch(userActions.resquestData());
        this.closeMyModal(data)
    })
  }

}
