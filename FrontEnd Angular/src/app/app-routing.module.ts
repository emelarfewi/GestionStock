import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowClientsComponent} from "./show-clients/show-clients.component";
import {UpdateClientComponent} from "./update-client/update-client.component";
import {DeleteClientComponent} from "./delete-client/delete-client.component";
import {AddClientComponent} from "./add-client/add-client.component";
import {SidenavbarComponent} from "./sidenavbar/sidenavbar.component";
import {ShowArticlesComponent} from "./show-articles/show-articles.component";
import {DeleteArticleComponent} from "./delete-article/delete-article.component";
import {UpdateArticleComponent} from "./update-article/update-article.component";
import {AddArticleComponent} from "./add-article/add-article.component";
import {AddCategorieComponent} from "./add-categorie/add-categorie.component";
import {ShowFournisseursComponent} from "./show-fournisseurs/show-fournisseurs.component";
import {AddFournisseurComponent} from "./add-fournisseur/add-fournisseur.component";
import {UpdateFournisseurComponent} from "./update-fournisseur/update-fournisseur.component";
import {DeleteFournisseurComponent} from "./delete-fournisseur/delete-fournisseur.component";
import {ShowCategoriesComponent} from "./show-categories/show-categories.component";
import {UpdateCategorieComponent} from "./update-categorie/update-categorie.component";
import {ShowCommendesComponent} from "./show-commendes/show-commendes.component";
import {AddCommendeComponent} from "./add-commende/add-commende.component";
import {ShowVentesComponent} from "./show-ventes/show-ventes.component";
import {AddVenteComponent} from "./add-vente/add-vente.component";

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'login', component:LoginComponent},
  {path: 'home', component:DashboardComponent},
  {path: 'clients', component:ShowClientsComponent},
  {path: 'addclient', component:AddClientComponent},
  {path: 'updateclient/id/:id', component:UpdateClientComponent},
  {path: 'deleteclient/:id', component:DeleteClientComponent},
  {path: 'sidebar', component:SidenavbarComponent},
  {path: 'articles', component:ShowArticlesComponent},
  {path: 'addarticle', component:AddArticleComponent},
  {path: 'updatearticle/id/:id', component:UpdateArticleComponent},
  {path: 'deletearticle/:id', component:DeleteArticleComponent},
  {path: 'categories', component:ShowCategoriesComponent},
  {path: 'addcategorie', component:AddCategorieComponent},
  {path: 'updatecategorie/id/:id', component:UpdateCategorieComponent},
  {path: 'fournisseurs', component:ShowFournisseursComponent},
  {path: 'addfournisseur', component:AddFournisseurComponent},
  {path: 'updatefournisseur/id/:id', component:UpdateFournisseurComponent},
  {path: 'deletefournisseur/:id', component:DeleteFournisseurComponent},
  {path: 'commendes', component:ShowCommendesComponent},
  {path: 'addcommende', component:AddCommendeComponent},
  {path: 'ventes', component:ShowVentesComponent},
  {path: 'addvente', component:AddVenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
