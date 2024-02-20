import { Component } from '@angular/core';
import {FournisseurService} from "../services/fournisseur.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Fournisseur} from "../models/fournisseur";
import {Article} from "../models/article";
import {Commende} from "../models/commende";
import {CommendeService} from "../services/commende.service";

@Component({
  selector: 'app-update-fournisseur',
  templateUrl: './update-fournisseur.component.html',
  styleUrls: ['./update-fournisseur.component.css']
})
export class UpdateFournisseurComponent {
  f!: Fournisseur;
  id!: number;
  constructor(public fs: FournisseurService, public ar: ActivatedRoute, public r: Router, public cs: CommendeService) {

    this.ar.params.subscribe(
      data => { this.id = data['id']}
    );

    this.fs.getById(this.id).subscribe(
      data => { this.f = data }
    );

  }
  modifier(edit:NgForm){
    let nom = edit.value['nom'];
    let prenom = edit.value['prenom'];
    let email = edit.value['email'];
    let phone = edit.value['phone'];
    let adresse = edit.value['adr'];
    if ( nom!="" && prenom!="" && email!="" && phone > 0 && adresse!="") {
      this.f.nomFrn = nom;
      this.f.prenomFrn = prenom;
      this.f.email = email;
      this.f.phone = phone;
      this.f.adresse = adresse;

      this.cs.getByNom(nom).subscribe(
        (data: Commende) => {
          let cmd: Commende = data;
          cmd.fournisseur = nom + ' ' + prenom;

          this.cs.updateCommende(cmd, cmd.idCmd).subscribe(
            data => {
              this.fs.updateFournisseur(this.f, this.id).subscribe(
                data => {
                  alert("Modification avec succes!");
                  this.r.navigate(['/fournisseurs']);
                },

                error => { alert("Echec de modification! Esseyez un autre fois")}
              );
            }
          );
        }
      );
    } else alert("Saisir tous les champs!");
  }


  cancel(){
    this.r.navigate(['/fournisseurs']);
  }


}
