import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../services/client.service";

@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.css']
})
export class DeleteClientComponent {
  id! : number;
  constructor(public r : Router, public ar : ActivatedRoute, public cs : ClientService) {
    this.ar.params.subscribe(
      data => { this.id = data['id']; }
    );
  }
  cancel(){
    alert("Operation de supprimation annulee!");
    this.r.navigate(['/clients'])
  }

  delete(){
    this.cs.deleteClient(this.id).subscribe(
      data => {
        alert("Supprimation avec succes!");
        this.id = 0;
        this.r.navigate(['/clients']);
      },
      error => { alert("Erreur en tent de supprimation"); }
    );
  }

}
