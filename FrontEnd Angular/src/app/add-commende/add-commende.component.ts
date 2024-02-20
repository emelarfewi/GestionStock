import { Component } from '@angular/core';
import {Commende} from "../models/commende";
import {ArticleService} from "../services/article.service";
import {CommendeService} from "../services/commende.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Article} from "../models/article";
import {FournisseurService} from "../services/fournisseur.service";
import {Fournisseur} from "../models/fournisseur";



@Component({
  selector: 'app-add-commende',
  templateUrl: './add-commende.component.html',
  styleUrls: ['./add-commende.component.css']
})
export class AddCommendeComponent {
  articles!: Article[];
  fournisseurs!: Fournisseur[];
  Price: number = 0;

  constructor(public fs: FournisseurService, public as: ArticleService, public cs:CommendeService, public r: Router) {
    this.as.getAllArticles().subscribe(
      data => {
        this.articles = data;
      },
      error => {
        alert("erreur");
      }
    );

    this.fs.getAllFournisseurs().subscribe(
      data => {
        this.fournisseurs = data;
      },
      error => {
        alert("erreur")
      }
    )
  }

  calculatePrice(add: NgForm) {
    let nom = add.value['article'];
    let quant = add.value['quantity'];
    if ( quant <= 0 ) {
      alert("quantity should be greater than 0");
      return;
    }

    this.as.getByNom(nom).subscribe(
      (data: Article) => {
        let art: Article = data;
        this.Price = quant * art.prixUnit;
        add.value['prix'] = this.Price;
      },
      error => {
        alert("error");
      }
   );
  }

  ajouter(add: NgForm) {
    let nom = add.value['article'];
    let frn = add.value['fournisseur'];
    let quant = add.value['quantity'];

    if (quant <= 0) {
      alert("Quantity should be greater than 0");
      return;
    }

    let cmd = new Commende(nom, frn, quant, this.Price);

    this.as.getByNom(nom).subscribe(
      (data: Article) => {
        let art: Article = data;
        art.quantite += quant;

        this.as.updateArticle(art, art.idArt).subscribe(
          data => {
            this.cs.addCommende(cmd).subscribe(
              data => {
                this.r.navigate(['/commendes']);
              },
              error => {
                console.error(error);
                alert("Error adding commende. Please try again later.");
                add.reset();
              }
            );
          },
          error => {
            alert("Error updating article quantity. Please try again later.");
          }
        );
      },
      error => {
        console.error(error);
        alert("Error fetching article information. Please try again later.");
      }
    );
  }

  cancel(){
    this.r.navigate(['/commendes']);
  }
}
