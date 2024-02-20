import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CategorieService} from "../services/categorie.service";
import {ArticleService} from "../services/article.service";

@Component({
  selector: 'app-delete-article',
  templateUrl: './delete-article.component.html',
  styleUrls: ['./delete-article.component.css']
})
export class DeleteArticleComponent {
  id! : number;
  constructor(public r : Router, public ar : ActivatedRoute, public as : ArticleService) {
    this.ar.params.subscribe(
      data => { this.id = data['id']; }
    );
  }
  cancel(){
    alert("Operation de supprimation annulee!");
    this.r.navigate(['/articles'])
  }

  delete(){
    this.as.deleteArticle(this.id).subscribe(
      data => {
        alert("Supprimation avec succes!");
        this.id = 0;
        this.r.navigate(['/articles']);
      },
      error => { alert("Erreur en tent de supprimation"); }
    );
  }

}
