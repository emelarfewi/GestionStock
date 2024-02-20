import { Component } from '@angular/core';
import {Article} from "../models/article";
import {ArticleService} from "../services/article.service";
import {ActivatedRoute, Router} from "@angular/router";
import { NgForm } from '@angular/forms';
import {Categorie} from "../models/categorie";
import {CategorieService} from "../services/categorie.service";

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent {
  a!: Article;
  id!: number;
  categories!: Categorie[];
  constructor(public cs:CategorieService, public as: ArticleService, public ar: ActivatedRoute, public r: Router){
    this.cs.getAllCategories().subscribe(
      data => {
        this.categories = data;
      },
      error => {
        alert("erreur");
      }
    );

    this.ar.params.subscribe(
      data => {this.id = data['id'];}
    );
    this.as.getById(this.id).subscribe(
      data =>{ this.a = data }
    );
  }

  modifier(edit:NgForm){
    let nom = edit.value['nom'];
    let quant = edit.value['quantity'];
    let pU = edit.value['prixUnit'];
    let dF = edit.value['dateFab'];
    let dE = edit.value['dateExp'];


    if (nom != "" && quant > 0 && pU > 0 && dF != "" && dE != "")
    {
      this.a.nomArt = nom;
      this.a.quantite = quant;
      this.a.prixUnit = pU;
      this.a.dateFabrication = dF;
      this.a.dateExpiration = dE;
      this.as.updateArticle(this.a, this.id).subscribe(
        data => {
          this.r.navigate(['/articles']);
        },
        error => {
          alert("Echec de modification! Esseyez un autre fois");
        }
      );
    } else alert("Saisir tous les champs!");
  }

  cancel(){
    this.r.navigate(['/articles']);
  }

}
