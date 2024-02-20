import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Fournisseur} from "../models/fournisseur";
import {Commende} from "../models/commende";
import {Categorie} from "../models/categorie";
import {Article} from "../models/article";

@Injectable({
  providedIn: 'root'
})
export class CommendeService {
  apiUrl = "http://localhost:8050/commendes";

  constructor( public http: HttpClient ) { }

  getAllCommendes() :Observable<Commende[]> {
    return this.http.get<Commende[]>(this.apiUrl);
  }

  getById(id: number) :Observable<Commende> {
    let Url = `${this.apiUrl}/id=${id}`;
    return this.http.get<Commende>(Url);
  }

  getByNom(n: String) :Observable<Commende> {
    let Url = `${this.apiUrl}/nom=${n}`;
    return this.http.get<Commende>(Url);
  }

  addCommende(cmd: Commende) :Observable<Commende> {
    return this.http.post<Commende>(this.apiUrl, cmd)
  }

  updateCommende(cmd: Commende, id:number) :Observable<Commende> {
    let Url = `${this.apiUrl}/id/${id}`;
    return this.http.put<Commende>(Url, cmd);
  }


  deleteCommende(id: number) :Observable<void> {
    let Url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(Url);
  }
}
