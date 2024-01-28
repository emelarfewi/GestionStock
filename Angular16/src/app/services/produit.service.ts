import { Injectable } from '@angular/core';
import { Produit } from './../models/produit';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  constroctur(public http: HttpClient) { }
}
