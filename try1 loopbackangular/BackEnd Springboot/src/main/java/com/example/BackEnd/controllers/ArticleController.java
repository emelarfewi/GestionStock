package com.example.BackEnd.controllers;

import com.example.BackEnd.models.Article;
import com.example.BackEnd.services.ArticleService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/articles")
public class ArticleController {
    private final ArticleService articleService;

    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }

    @GetMapping
    public ResponseEntity<List<Article>> getAllArticles() {
        List<Article> articles = articleService.findAllArticles();
        return new ResponseEntity<>(articles, HttpStatus.OK);
    }

    @GetMapping("/id={id}")
    public ResponseEntity<Article> getArticleByIdArt(@PathVariable("id") Long id) {
        Article article = articleService.findById(id);
        return new ResponseEntity<>(article, HttpStatus.OK);
    }

    @GetMapping("/nom={n}")
    public ResponseEntity<Article> getArticleByNomArt(@PathVariable("n") String nom) {
        Article article = articleService.findByNomArt(nom);
        return new ResponseEntity<>(article, HttpStatus.OK);
    }

    @GetMapping("/cat={n}")
    public ResponseEntity<Article> getArticleByCategorie(@PathVariable("n") String nom) {
        Article article = articleService.findByCategorie(nom);
        return new ResponseEntity<>(article, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Article> addArticle(@RequestBody Article article) {
        Article newArticle = articleService.addArticle(article);
        return new ResponseEntity<>(newArticle, HttpStatus.CREATED);
    }

    @PutMapping("/id/{id}")
    public ResponseEntity<Article> updateArticleById(@PathVariable("id") Long id, @RequestBody Article article) {
        Article updatedArticle = articleService.findById(id);
        updatedArticle.setNomArt(article.getNomArt());
        updatedArticle.setPrixUnit(article.getPrixUnit());
        updatedArticle.setQuantite(article.getQuantite());
        updatedArticle.setDateFabrication(article.getDateFabrication());
        updatedArticle.setDateExpiration(article.getDateExpiration());
        Article savedArticle = articleService.updateArticle(updatedArticle);
        return new ResponseEntity<>(savedArticle, HttpStatus.OK);
    }

    @PutMapping("/nom/{n}")
    public ResponseEntity<Article> updateArticleByNom(@PathVariable("n") String nom, @RequestBody Article article) {
        Article updatedArticle = articleService.findByNomArt(nom);
        updatedArticle.setQuantite(article.getQuantite());
        Article savedArticle = articleService.updateArticle(updatedArticle);
        return new ResponseEntity<>(savedArticle, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteArticle(@PathVariable("id") Long id) {
        articleService.deleteArticle(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
