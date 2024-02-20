import { Component } from '@angular/core';
import {ClientService} from "../services/client.service";
import {Client} from "../models/client";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent {
  c!: Client;
  id!: number;
  constructor(public cs: ClientService, public ar: ActivatedRoute, public r: Router) {

    this.ar.params.subscribe(
      data => { this.id = data['id']}
    );

    this.cs.getById(this.id).subscribe(
      data => { this.c = data }
    );

  }
  modifier(edit:NgForm){
    let nom = edit.value['nom'];
    let prenom = edit.value['prenom'];
    let email = edit.value['email'];
    let phone = edit.value['phone'];
    let adresse = edit.value['adr'];
    if ( nom!="" && prenom!="" && email!="" && phone > 0 && adresse!="") {
      this.c.nomClt = nom;
      this.c.prenomClt = prenom;
      this.c.email = email;
      this.c.phone = phone;
      this.c.adresse = adresse;
      this.cs.updateClient(this.c, this.id).subscribe(
        data => {
          alert("Modification avec succes!");
          this.r.navigate(['/clients']);
        },

      error => { alert("Echec de modification! Esseyez un autre fois")}
      );
    } else alert("Saisir tous les champs!");
  }


  cancel(){
    this.r.navigate(['/clients']);
  }

}
