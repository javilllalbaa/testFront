import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable, of } from 'rxjs';
import { Data } from './../../mockup/data'
import { CategoryModel } from 'src/app/core/models/category.model'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    @Inject('API_URL') private apiUrl: string,
    private http: HttpClient
  ) {}

  getCategory(): Observable<any> {
    return this.http.get(`${this.apiUrl}/category/all`)
  }

  getProducts(data): Observable<any> {
    var body = {
      "category": data._id
    }
    return this.http.post(`${this.apiUrl}/product/filter`, body)
  }

  createCategory(data): Observable<any> {
    var body = {
      "name": data.name,
      "description": data.description
    }
    return this.http.post(`${this.apiUrl}/category/create`, body)
  }

  createProduct(body): Observable<any> {
    return this.http.post(`${this.apiUrl}/product/create`, body)
  }

  getAllProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/product/all`)
  }

  public getJSON(): Observable<any> {
    return of(Data)
  }

}
