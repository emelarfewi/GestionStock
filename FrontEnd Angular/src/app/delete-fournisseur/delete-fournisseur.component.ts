import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CommendeService} from "../services/commende.service";
import {FournisseurService} from "../services/fournisseur.service";

@Component({
  selector: 'app-delete-fournisseur',
  templateUrl: './delete-fournisseur.component.html',
  styleUrls: ['./delete-fournisseur.component.css']
})
export class DeleteFournisseurComponent {
  id! : number;
  constructor(public r : Router, public ar : ActivatedRoute, public fs : FournisseurService) {
    this.ar.params.subscribe(
      data => { this.id = data['id']; }
    );
  }
  cancel(){
    alert("Operation de supprimation annulee!");
    this.r.navigate(['/fournisseurs'])
  }

  delete(){
    this.fs.deleteFournisseur(this.id).subscribe(
      data => {
        alert("Supprimation avec succes!");
        this.id = 0;
        this.r.navigate(['/fournisseurs']);
      },
      error => { alert("Erreur en tent de supprimation"); }
    );
  }

}
