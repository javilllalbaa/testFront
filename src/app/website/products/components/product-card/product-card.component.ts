import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: ProductModel;
  statusProduct: boolean = false
  textSeletedProduct: string = "Agregar" 
  @Output() productSeleted = new EventEmitter();

  constructor(
  ) { }

  ngOnInit(): void { }

  addProduct(product) {
    this.statusProduct = !this.statusProduct 
    this.textSeletedProduct = this.statusProduct ? "Eliminar" : "Agregar" 
    this.productSeleted.emit(product);
  }

}
