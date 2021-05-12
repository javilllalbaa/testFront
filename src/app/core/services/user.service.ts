import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable, of } from 'rxjs';
import { Data } from './../../mockup/user';
import { UserModel } from '../../core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    @Inject('API_URL') private apiUrl: string,
    private http: HttpClient
  ) {}

  login(data) {
    var body = {
      "username": data.username,
      "password": data.password
    }
    return this.http.post(`${this.apiUrl}/user/login`, body)
  }

  public getJSON(): Observable<any> {
    return of(Data)
  }

}
