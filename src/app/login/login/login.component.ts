import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as userActions from 'src/app/redux/user/user.action';
import { UserModel } from '../../core/models/user.model';
import { UserService } from './../../core/services/user.service'
import { Router } from '@angular/router';
import sha256 from 'sha256'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  msgAlert: string
  userLogin = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private store: Store<any>,
    private el: ElementRef,
    private userService: UserService,
    private router: Router
  ) { }

  ngAfterViewInit() { //Recién en este punto tendrás acceso al valor
    var payload: UserModel = JSON.parse(localStorage.getItem('usuario'))
    if (payload) {
      this.store.dispatch(userActions.responseloginUser({ payload }));
      this.router.navigate(['/products']);
    }
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.userLogin.value.password = sha256(this.userLogin.value.password)
    this.userService.login(this.userLogin.value)
      .subscribe((data) => {
        var payload: UserModel = data
        localStorage.setItem('usuario', JSON.stringify(payload));
        this.store.dispatch(userActions.responseloginUser({ payload }));
        this.router.navigate(['/products']);
      },
      error => {
        console.log(error)
        this.msgAlert = "Error del usuario ó contraseña"
        setTimeout( () => {
          this.msgAlert = ""
        }, 3000);
      })
  }

}
