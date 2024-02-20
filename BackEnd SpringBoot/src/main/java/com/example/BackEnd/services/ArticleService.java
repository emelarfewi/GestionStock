package com.example.BackEnd.services;

import com.example.BackEnd.models.Article;
import com.example.BackEnd.repositories.ArticleRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class ArticleService {
    private  final  ArticleRepository articleRepo;

    @Autowired
    public ArticleService(ArticleRepository articlerepo) {
        this.articleRepo = articlerepo;
    }

    public Article addArticle(Article article) {
        return articleRepo.save(article);
    }

    public List<Article> findAllArticles() {
        return articleRepo.findAll();
    }

    public Article updateArticle(Article article) {
        return articleRepo.save(article);
    }

    public Article findById(Long id) {
        return articleRepo.findArticleByIdArt(id);
    }

    public Article findByNomArt(String nom) {
        return articleRepo.findArticleByNomArt(nom);
    }

    public Article findByCategorie(String cat) {
        return articleRepo.findArticleByCategorie(cat);
    }


    public void deleteArticle(Long id) {
        articleRepo.deleteArticleByIdArt(id);
    }

}
