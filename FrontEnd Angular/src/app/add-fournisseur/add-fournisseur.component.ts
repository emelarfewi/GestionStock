import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {FournisseurService} from "../services/fournisseur.service";
import {Fournisseur} from "../models/fournisseur";

@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.css']
})
export class AddFournisseurComponent {
  constructor(public fs: FournisseurService, public r: Router){}
  ajouter(add: NgForm)  {
    let nom = add.value['nom'];
    let prenom = add.value['prenom'];
    let email = add.value['email'];
    let phone = add.value['phone'];
    let adresse = add.value['adr'];

    let f: Fournisseur = new Fournisseur(nom, prenom, email, phone, adresse);

    this.fs.addFournisseur(add.value).subscribe(
      data => { alert ("Ajout Fournisseur Avec Succes!");
        this.r.navigate(['/fournisseurs'])
      },
      error => {
        console.error(error);
        alert("Error during account creation!");
        add.reset();
      }
    );
  }

  cancel(){
    this.r.navigate(['/commendes']);
  }
}
