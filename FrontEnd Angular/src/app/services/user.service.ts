import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //L'Url de l'Api
  apiUrl = "http://localhost:8050/users";

  constructor( public http: HttpClient ) { }

  getAllUsers() :Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getByEmail (e: string) :Observable<User[]> {
    let Url = `${this.apiUrl}/email=${e}`;
    return this.http.get<User[]>(Url);
  }

  getByPwd (p: string) :Observable<User[]> {
    let Url = `${this.apiUrl}/password=${p}`;
    return this.http.get<User[]>(Url);
  }

  getByEmailPwd (e: string, p: string) :Observable<User[]>{
    let Url = `${this.apiUrl}/${e}&${p}`;
    return this.http.get<User[]>(Url);
  }

  addUser(u: User) :Observable<User> {
    return this.http.post<User>(this.apiUrl, u)
  }

  updateUser(u: User, id:number) :Observable<User> {
    let Url = `${this.apiUrl}/id/${id}`;
    return this.http.put<User>(Url, u);
  }

  updatePwd (u: User, e: string) :Observable<User> {
    let Url = `${this.apiUrl}/email/${e}`;
    return this.http.put<User>(Url, u);
  }

  deleteUser(id: number) :Observable<void> {
    let Url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(Url);
  }

}
