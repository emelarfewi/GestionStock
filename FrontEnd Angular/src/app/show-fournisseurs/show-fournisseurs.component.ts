import { Component } from '@angular/core';
import {FournisseurService} from "../services/fournisseur.service";
import {ActivatedRoute} from "@angular/router";
import {Fournisseur} from "../models/fournisseur";

@Component({
  selector: 'app-show-fournisseurs',
  templateUrl: './show-fournisseurs.component.html',
  styleUrls: ['./show-fournisseurs.component.css']
})
export class ShowFournisseursComponent {

  fournisseurs!: Fournisseur[];
  constructor(public fs: FournisseurService, public ar: ActivatedRoute) {

    this.fs.getAllFournisseurs().subscribe(
      data => {
        this.fournisseurs = data;
      },
      error => { alert("erreur");}
    );
  }
}
