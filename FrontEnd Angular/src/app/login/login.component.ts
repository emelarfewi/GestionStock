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
          if (pers.email === em && pers.password === pwd) {
            alert('Login successful!');
            this.r.navigate(['/home']);
            userFound = 1;
            break;
          }
        }

        if (userFound === 0) {
          alert('Email or password incorrect!');
        }
      },

      error => {
        alert("Error during account creation!");
      }
    );
  }
}
