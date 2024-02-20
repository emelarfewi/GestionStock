import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Vente} from "../models/vente";
import {VenteService} from "../services/vente.service";
import {ArticleService} from "../services/article.service";
import {Article} from "../models/article";

@Component({
  selector: 'app-show-ventes',
  templateUrl: './show-ventes.component.html',
  styleUrls: ['./show-ventes.component.css']
})
export class ShowVentesComponent {
  ventes!: Vente[];
  id!: number;
  constructor(public vs: VenteService , public ar: ActivatedRoute) {

    this.ar.params.subscribe(
      data => {
        this.id = data['id'];
      }
    );

    this.vs.getAllVentes().subscribe(
      data => {
        this.ventes = data;
      },
      error => {
        alert("erreur");
      }
    );
  }
}
