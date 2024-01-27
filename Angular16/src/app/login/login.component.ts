import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'path-to-your-user-service';  // Import your user service

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) {}

  login(l: NgForm) {
    const email = l.value['email'];
    const password = l.value['pwd'];

    this.userService.getByEmailPwd(email, password).subscribe(
      (data: User[]) => {
        let userFound: number = 0;

        for(let i = 0; i < data.length; i++) {
          let pers: User = data[i];
          if (pers.Email === em && pers.Password === pwd) {
            userFound = 1;
            alert('Login successful!');
            this.router.navigate(['/accueil']);
          } else if (pers.Email === em && pers.Password != pwd) {
          alert('Email or password incorrect!');
          }
        }

        if (userFounf === 0) {
          alert("Account does'nt exist!")
        }
      };
      
      error => {
        console.error('Error during email and password verification', error);
        alert('Error during email and password verification');
      }
    );
  }
}
