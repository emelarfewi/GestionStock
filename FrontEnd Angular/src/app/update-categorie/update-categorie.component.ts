import { Component } from '@angular/core';
import {Categorie} from "../models/categorie";
import {CategorieService} from "../services/categorie.service";
import {ArticleService} from "../services/article.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Commende} from "../models/commende";
import {Article} from "../models/article";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.css']
})
export class UpdateCategorieComponent {
  id!: number;
  c!: Categorie;
  constructor(public cs:CategorieService, public ar: ActivatedRoute, public r: Router, public as: ArticleService){

    this.ar.params.subscribe(
      data => {this.id = data['id'];}
    );
    this.cs.getById(this.id).subscribe(
      data =>{
        this.c = data;
      }
    );
  }

  modifier(edit: NgForm) {
    this.cs.getById(this.id).subscribe(
      (data: Categorie) => {
        let cat: Categorie = data;
        let nomCateg = cat.nomCat;
        let nom = edit.value['nom'];
        if (nom != "") {
          this.c.nomCat = nom;
          this.as.getByCat(nomCateg).subscribe(
            (data: Article) => {

                let art: Article = data;
                art.categorie = nom;

                this.as.updateArticle(art, art.idArt).subscribe(
                  data => {
                    this.cs.updateCategorie(this.c, this.id).subscribe(
                      data => {
                        this.r.navigate(['/categories']);
                      },
                      error => {
                        alert("Échec de modification! Essayez une autre fois.");
                      }
                    );
                  },
                  error => {
                    alert("Échec de mise à jour de l'article! Essayez une autre fois.");
                  }
                );
            },
            (error) => {
              alert("Erreur lors de la récupération de l'article.");
            }
          );
        } else {
          alert("Saisissez tous les champs!");
        }
      }

    )

  }


  cancel(){
    this.r.navigate(['/articles']);
  }

}
