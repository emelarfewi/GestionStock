import {Component, EventEmitter, Output} from "@angular/core";
import {Article} from "../models/article";
import {ArticleService} from "../services/article.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-show-articles',
  templateUrl: './show-articles.component.html',
  styleUrls: ['./show-articles.component.css']
})
export class ShowArticlesComponent {
  articles!: Article[];

  constructor(public as: ArticleService, public ar: ActivatedRoute) {

    this.as.getAllArticles().subscribe(
      data => {
        this.articles = data;
      },
      error => {
        alert("erreur");
      }
    );
  }



  searchText: string = '';

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
  //  console.log(this.searchText)
  }

}
