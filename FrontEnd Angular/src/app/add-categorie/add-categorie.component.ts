import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Categorie} from "../models/categorie";
import {CategorieService} from "../services/categorie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent {
  constructor(public cs:CategorieService, public r: Router) {}

  ajouter(add: NgForm) {
    let nom = add.value['nom'];
    let article = new Categorie(nom);

    this.cs.addCategorie(article).subscribe(
      data => {
        this.r.navigate(['/categories']);
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
