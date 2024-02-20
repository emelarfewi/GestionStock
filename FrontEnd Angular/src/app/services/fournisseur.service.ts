import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Fournisseur} from "../models/fournisseur";
import {Commende} from "../models/commende";

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  apiUrl = "http://localhost:8050/fournisseurs";

  constructor( public http: HttpClient ) { }

  getAllFournisseurs() :Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(this.apiUrl);
  }

  getById(id: number) :Observable<Fournisseur> {
    let Url = `${this.apiUrl}/id=${id}`;
    return this.http.get<Fournisseur>(Url);
  }

  addFournisseur(frn: Fournisseur) :Observable<Fournisseur> {
    return this.http.post<Fournisseur>(this.apiUrl, frn)
  }

  updateFournisseur(frn: Fournisseur, id:number) :Observable<Fournisseur> {
    let Url = `${this.apiUrl}/id/${id}`;
    return this.http.put<Fournisseur>(Url, frn);
  }


  deleteFournisseur(id: number) :Observable<void> {
    let Url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(Url);
  }
}
