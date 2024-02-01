import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from './../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(public us: UserService, public r: Router) {}

  signup(s: NgForm) {
    let nom = s.value['nom'];
    let prenom = s.value['prenom'];
    let em = s.value['email'];
    let pwd = s.value['pwd'];
    let u = new User(nom, prenom, em, pwd);

    this.us.getByEmail(em).subscribe(
      (data: User[]) => {
        let userFound: number = 0;

        for (let i = 0; i < data.length; i++) {
          let pers: User = data[i];
          if (pers.Email === em) {
            alert("Account already exists with this Email: " + em + "!");
            userFound = 1;
            break;
          }
        }
        if (userFound === 0) {
          this.us.addUser(u).subscribe(
            data => {
              alert("Account created successfully!");
              this.r.navigate(['/login']);
            },
            error => {
              console.error("Error during account creation!", error);
              alert("Error during account creation!");
            }
          );
        }
      },
      error => {
        console.error("Error during email verification", error);
        alert("Error during email verification!");

      }
    );
  }
}
