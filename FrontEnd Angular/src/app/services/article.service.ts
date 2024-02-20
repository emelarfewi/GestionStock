import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Article} from "../models/article";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
//L'Url de l'Api
  apiUrl = "http://localhost:8050/articles";

  constructor( public http: HttpClient ) { }
  getAllArticles() :Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl);
  }

  getById(id: number) :Observable<Article> {
    let Url = `${this.apiUrl}/id=${id}`;
    return this.http.get<Article>(Url);
  }
  getByNom(n: String) :Observable<Article> {
    let Url = `${this.apiUrl}/nom=${n}`;
    return this.http.get<Article>(Url);
  }

  getByCat(n: String) :Observable<Article> {
    let Url = `${this.apiUrl}/cat=${n}`;
    return this.http.get<Article>(Url);
  }

  addArticle(article: Article) :Observable<Article> {
    return this.http.post<Article>(this.apiUrl, article)
  }

  updateArticle(article: Article, id:number) :Observable<Article> {
    let Url = `${this.apiUrl}/id/${id}`;
    return this.http.put<Article>(Url, article);
  }

  updateQuant(article: Article, nom:String) :Observable<Article> {
    let Url = `${this.apiUrl}/nom/${nom}`;
    return this.http.put<Article>(Url, article);
  }

  deleteArticle(id: number) :Observable<void> {
    let Url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(Url);
  }
}
