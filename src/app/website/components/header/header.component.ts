import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/redux';
import { UserModel } from './../../../core/models/user.model';
import * as userActions from 'src/app/redux/user/user.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userData: UserModel

  constructor(
    private store: Store<State>,
    private router: Router
  ) {
    this.store.select((data) => data.user)
    .subscribe( data => {
      this.userData = data['user']
    })
  }

  ngOnInit(): void {
    var payload: UserModel = JSON.parse(localStorage.getItem('usuario'))
    if(payload){
      this.store.dispatch(userActions.responseloginUser({ payload }));
    }else{
      this.router.navigate(['/login']);
    }
  }

  shutDown(): void {
    localStorage.removeItem('usuario')
    this.router.navigate(['/login']);

  }

}
