import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Categorie} from "../models/categorie";
import {Article} from "../models/article";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  apiUrl = "http://localhost:8050/categories";
  constructor( public http: HttpClient ) { }
  getAllCategories() :Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.apiUrl);
  }

  getById(id: number) :Observable<Categorie> {
    let Url = `${this.apiUrl}/id=${id}`;
    return this.http.get<Categorie>(Url);
  }

  addCategorie(categorie: Categorie) :Observable<Categorie> {
    return this.http.post<Categorie>(this.apiUrl, categorie)
  }

  updateCategorie(categorie: Categorie, id:number) :Observable<Categorie> {
    let Url = `${this.apiUrl}/id/${id}`;
    return this.http.put<Categorie>(Url, categorie);
  }


  deleteCategorie(id: number) :Observable<void> {
    let Url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(Url);
  }
}
