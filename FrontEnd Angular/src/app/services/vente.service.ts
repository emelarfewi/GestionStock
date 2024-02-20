import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vente} from "../models/vente";
import {Fournisseur} from "../models/fournisseur";

@Injectable({
  providedIn: 'root'
})
export class VenteService {
  apiUrl = "http://localhost:8050/ventes";

  constructor( public http: HttpClient ) { }

  getAllVentes() :Observable<Vente[]> {
    return this.http.get<Vente[]>(this.apiUrl);
  }

  getById(id: number) :Observable<Vente> {
    let Url = `${this.apiUrl}/id=${id}`;
    return this.http.get<Vente>(Url);
  }

  addVente(vent: Vente) :Observable<Vente> {
    return this.http.post<Vente>(this.apiUrl, vent)
  }

  updateVente(vent: Vente, id:number) :Observable<Vente> {
    let Url = `${this.apiUrl}/id/${id}`;
    return this.http.put<Vente>(Url, vent);
  }


  deleteVente(id: number) :Observable<void> {
    let Url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(Url);
  }
}
