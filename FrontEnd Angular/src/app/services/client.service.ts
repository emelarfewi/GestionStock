import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../models/client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
//L'Url de l'Api
  apiUrl = "http://localhost:8050/clients";

  constructor( public http: HttpClient ) { }

  getAllClients() :Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }

  getById(id: number) :Observable<Client> {
    let Url = `${this.apiUrl}/id=${id}`;
    return this.http.get<Client>(Url);
  }

  addClient(clt: Client) :Observable<Client> {
    return this.http.post<Client>(this.apiUrl, clt)
  }

  updateClient(clt: Client, id:number) :Observable<Client> {
    let Url = `${this.apiUrl}/id/${id}`;
    return this.http.put<Client>(Url, clt);
  }


  deleteClient(id: number) :Observable<void> {
    let Url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(Url);
  }

}
