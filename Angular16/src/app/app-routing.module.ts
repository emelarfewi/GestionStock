import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: '/signup', component:SignupComponent},
  {path: '/accueil', component:AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
