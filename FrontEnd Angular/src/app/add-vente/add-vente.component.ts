import { Component } from '@angular/core';
import {Article} from "../models/article";
import {ArticleService} from "../services/article.service";
import {ClientService} from "../services/client.service";
import {VenteService} from "../services/vente.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Client} from "../models/client";
import {Vente} from "../models/vente";


@Component({
  selector: 'app-add-vente',
  templateUrl: './add-vente.component.html',
  styleUrls: ['./add-vente.component.css']
})
export class AddVenteComponent {
  articles!: Article[];
  clients!: Client[];
  Price!: number;

  constructor(public cs: ClientService, public as: ArticleService, public vs:VenteService, public r: Router) {
    this.as.getAllArticles().subscribe(
      data => {
        this.articles = data;
      },
      error => {
        alert("erreur");
      }
    );

    this.cs.getAllClients().subscribe(
      data => {
        this.clients = data;
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
    let clt = add.value['client'];
    let quant = add.value['quantity'];

    if (quant <= 0) {
      alert("Quantity should be greater than 0");
      return;
    }

    let vent = new Vente(nom, clt, quant, this.Price);

    this.as.getByNom(nom).subscribe(
      (data: Article) => {
        let art: Article = data;
        art.quantite -= quant;

        this.as.updateArticle(art, art.idArt).subscribe(
          data => {
            this.vs.addVente(vent).subscribe(
              data => {
                this.r.navigate(['/ventes']);
              },
              error => {
                console.error(error);
                alert("Error adding vente. Please try again later.");
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
    this.r.navigate(['/ventes']);
  }
}
