import { Injectable } from '@angular/core';
import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //L'Url de l'Api
  apiUrl = "http://localhost:3000/users";

  constructor( public http: HttpClient ) { }

  addUser(u: User) {
    return this.http.post<any>(this.apiUrl, u);
  }

  getByEmail (e: string) {
    let Url = `${this.apiUrl}?email=${e}`;
    return this.http.get<User[]>(Url);
  }

  getByEmailPwd (e: string, p: string) {
    let Url = `${this.apiUrl}?email=${e}&password=${p}`;
    return this.http.get<User[]>(Url);
  }

  changePwd (u: User, e: string) {
    let Url = this.apiUrl + "/" + e;
    return this.http.put(Url, u);
  }

}

