import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public us: UserService, public r: Router) {}

  login(l: NgForm) {
    let em = l.value['email'];
    let pwd = l.value['pwd'];

    this.us.getByEmailPwd(em, pwd).subscribe(
      (data: User[]) => {
        let userFound: number = 0;

        for (let i = 0; i < data.length; i++) {
          let pers: User = data[i];


          // If no account found with the email and password combination
          if (pers.Email === em && pers.Password === pwd) {
            userFound = 1;
            alert('Login successful!');
            this.r.navigate(['/accueil']);
            break;
          }

          // If account found with the email but wrong password
          if (pers.Email === em && pers.Password != pwd) {
            alert('Email or password incorrect!');
            userFound = 1;
            break;
          }
        }
        // If no account found with the email and password combination
        if (userFound === 0) {
          alert("Account doesn't exist!");
        }
      },

      error => {
        console.error("Error during email and password verification", error);


        alert("Error during email and password verification");
      }
    );
  }
}
