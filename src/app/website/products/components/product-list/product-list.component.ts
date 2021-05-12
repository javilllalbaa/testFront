import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/core/models/product.model';
import { CategoryModel } from 'src/app/core/models/category.model';
import * as userActions from 'src/app/redux/products/product.action';
import { ModalCardComponent } from '../modal-card/modal-card.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products$: Observable<ProductModel>
  category$: Observable<CategoryModel>
  statusFilter: string
  product: any = []
  textProduct: string
  category: string = ""
  create: boolean = false
  modalRef: any;

  constructor(
    private store: Store<any>,
    private modalService: NgbModal
  ) {
    this.store.dispatch(userActions.resquestData());
    this.store.dispatch(userActions.resquestDataCategory());
    this.store.select((data) => data.user)
    .subscribe( data => {
      if(data.user && data.user.username)
        this.create = data.user.username == "admin" ? true : false
    })
  }

  ngOnInit(): void {
    setTimeout(function () {
      var contenedor = document.getElementsByClassName("contenedor");
      var listCard = document.getElementsByClassName("list_card");
      var height = screen.height - 230
      var height_list_card = screen.height - 350
      contenedor[0]['style'].height = height + "px"
      contenedor[0]['style']['overflow'] = "hidden"
      listCard[0]['style'].height = height_list_card + "px"
      listCard[0]['style']['overflow-y'] = "scroll"
      listCard[0]['style']['overflow-x'] = "hidden"
    }, 500);
  }

  showProductsFilter(event): void {
    this.products$ = this.store.select((data) => {
      var dataProduct = data.products.products.filter(p => p.category == event)
      this.statusFilter = dataProduct.length == 0 ? "No hay productos en esta categoria." : ""
      this.category = event
      setTimeout(() => {
        this.statusFilter = ""
      }, 4000);
      return dataProduct
    })
  }

  productSeletedShow(event): void {
    if(this.product.filter(p => p._id == event._id ).length > 0){
      this.product = this.product.filter(p => p._id != event._id )
    }else{
      this.product.push(event)
    }
    var subtotal = 0
    var total = 0
    var vat = 0
    this.product.map(p =>{ 
      subtotal = subtotal + p.price
      vat = vat + p.vat
      total = total + vat 
    }) 
    this.textProduct = `El subtotal es: ${subtotal} el iva es ${vat} y total es de ${total}`
  }

  open() {
    this.modalRef = this.modalService.open(ModalCardComponent);
    this.modalRef.componentInstance.category = this.category;
    this.modalRef.componentInstance.closeMyModal = () => {
      this.modalRef.close();
    }
  }

}
