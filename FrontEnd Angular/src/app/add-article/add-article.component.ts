import { Component } from '@angular/core';
import {ArticleService} from "../services/article.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Article} from "../models/article";
import {Categorie} from "../models/categorie";
import{CategorieService} from "../services/categorie.service";

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent {
  categories!: Categorie[];
  constructor(public as: ArticleService, public cs:CategorieService, public r: Router) {
    this.cs.getAllCategories().subscribe(
      data => {
        this.categories = data;
      },
      error => {
        alert("erreur");
      }
    );
  }

  ajouter(add: NgForm) {
    let nom = add.value['nom'];
    let cat = add.value['category'];
    let quant = add.value['quantity'];
    let pU = add.value['prixUnit'];
    let dF = add.value['dateFab'];
    let dE = add.value['dateExp'];
    let article = new Article(nom, cat, quant, pU, dF, dE);

    this.as.addArticle(article).subscribe(
      data => {
        this.r.navigate(['/articles']);
        },

      error => {
        console.error("Error during account creation!", error);
        alert("Error during account creation!");
      }
      );
  }

  cancel(){
    this.r.navigate(['/articles']);
  }
}
