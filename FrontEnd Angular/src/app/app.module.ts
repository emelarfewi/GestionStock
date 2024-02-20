import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import {NgOptimizedImage} from "@angular/common";
import { AddClientComponent } from './add-client/add-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { ShowClientsComponent } from './show-clients/show-clients.component';
import { DeleteClientComponent } from './delete-client/delete-client.component';
import { ShowArticlesComponent } from './show-articles/show-articles.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { DeleteArticleComponent } from './delete-article/delete-article.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { ShowCategoriesComponent } from './show-categories/show-categories.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';
import { DeleteFournisseurComponent } from './delete-fournisseur/delete-fournisseur.component';
import { UpdateFournisseurComponent } from './update-fournisseur/update-fournisseur.component';
import { AddFournisseurComponent } from './add-fournisseur/add-fournisseur.component';
import { ShowFournisseursComponent } from './show-fournisseurs/show-fournisseurs.component';
import { ShowCommendesComponent } from './show-commendes/show-commendes.component';
import { ShowVentesComponent } from './show-ventes/show-ventes.component';
import { AddVenteComponent } from './add-vente/add-vente.component';
import { AddCommendeComponent } from './add-commende/add-commende.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SidenavbarComponent,
    AddClientComponent,
    UpdateClientComponent,
    ShowClientsComponent,
    DeleteClientComponent,
    ShowArticlesComponent,
    AddArticleComponent,
    UpdateArticleComponent,
    DeleteArticleComponent,
    AddCategorieComponent,
    ShowCategoriesComponent,
    UpdateCategorieComponent,
    DeleteFournisseurComponent,
    UpdateFournisseurComponent,
    AddFournisseurComponent,
    ShowFournisseursComponent,
    ShowCommendesComponent,
    ShowVentesComponent,
    AddVenteComponent,
    AddCommendeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
