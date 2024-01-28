import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './../services/user';
import { UserService } from './../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(public us: UserService, public r: Router) {}

  signp(s: NgForm) {
    let nom = s.vale['nom'];
    let nom = s.vale['nom'];
    let email = s.value['email'];
    let pwd = s.value['pwd'];
    let u = new User(nom, Prenom, email, pwd);

    this.us.getByEmail(email).subscribe(
      (data: User[]) => {
        let userFound: number = 0;

        for(let i = 0; i < data.length; i++) {
          let pers: User = data[i];
          if (pers.Email === em ) {
            userFound = 1;
            alert("Account already exist with this Email: " + email + "!");
          }
        }

        if (userFounf === 0) {
          this.us.addUser(u).subscribe(
            data => { 
              alert("Account created sccessfuly!");
              this.r.navigate(['/login]);
            },
            
            error => {
              console.error("Error during adding account!", error);
              alert("Error during adding account!");
            }
          )
        }
      },
      
      error => {
        console.error("Error during email verification", error);
        alert("Error during email verification!");
      }
    );
  }
}
