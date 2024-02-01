import { Injectable } from '@angular/core';
import { Product } from './../models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //Url d'Api
  apiUrl = "http://localhost:3000/products";

  constructor(public http: HttpClient) { }

  getAllProducts() {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getById(id: number) {
    return this.http.get<Product>(this.apiUrl + "/" + id);
  }

  addProduct(p: Product) {
    return this.http.post<any>(this.apiUrl, p);
  }

  changeProduct(id: number, p: Product) {
    let Url = this.apiUrl + "/" + id;
    return this.http.put(Url, p);
  }

  deleteProduct(id: number) {
    let Url = this.apiUrl + "/" + id;
    return this.http.delete<any>(Url);
  }
}
