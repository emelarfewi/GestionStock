import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Client } from "../models/client";
import { ClientService } from "../services/client.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {

  constructor(public cs: ClientService, public r: Router){}
  ajouter(add: NgForm)  {
    let nom = add.value['nom'];
    let prenom = add.value['prenom'];
    let email = add.value['email'];
    let phone = add.value['phone'];
    let adresse = add.value['adr'];

    let c: Client = new Client(nom, prenom, email, phone, adresse);

    this.cs.addClient(add.value).subscribe(
      data => {
        alert ("Ajout Client Avec Succes!");
        this.r.navigate(['/clients'])
      },
      error => {
        console.error(error);
        alert("Error during account creation!");
        add.reset();
      }
    );
  }
  cancel(){
    this.r.navigate(['/clients']);
  }

}
