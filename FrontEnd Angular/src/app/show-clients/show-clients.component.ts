import { Component } from '@angular/core';
import {Client} from "../models/client";
import {ClientService} from "../services/client.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-show-clients',
  templateUrl: './show-clients.component.html',
  styleUrls: ['./show-clients.component.css']
})
export class ShowClientsComponent {

  clients!: Client[];
  constructor(public cs: ClientService, public ar: ActivatedRoute) {

    this.cs.getAllClients().subscribe(
      data => {
        this.clients = data;
        },
      error => { alert("erreur");}
    );
  }


}
