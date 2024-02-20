import { Component } from '@angular/core';
import {Commende} from "../models/commende";
import {CommendeService} from "../services/commende.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-show-commendes',
  templateUrl: './show-commendes.component.html',
  styleUrls: ['./show-commendes.component.css']
})
export class ShowCommendesComponent {
  commendes!: Commende[];

  constructor(public cs: CommendeService , public ar: ActivatedRoute) {

    this.cs.getAllCommendes().subscribe(
      data => {
        this.commendes = data;
      },
      error => {
        alert("erreur");
      }
    );
  }

}
