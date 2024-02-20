import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Categorie} from "../models/categorie";
import {CategorieService} from "../services/categorie.service";

@Component({
  selector: 'app-show-categories',
  templateUrl: './show-categories.component.html',
  styleUrls: ['./show-categories.component.css']
})
export class ShowCategoriesComponent {
  categories!: Categorie[];

  constructor(public cs: CategorieService, public ar: ActivatedRoute) {

    this.cs.getAllCategories().subscribe(
      data => {
        this.categories = data;
      },
      error => {
        alert("erreur");
      }
    );
  }
}
