package com.example.BackEnd.repositories;
import com.example.BackEnd.models.Article;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArticleRepository extends JpaRepository<Article, Long>{
    void deleteArticleByIdArt(Long id);
    Article findArticleByIdArt(Long id);
    Article findArticleByNomArt(String nom);
    Article findArticleByCategorie(String nom);

}
