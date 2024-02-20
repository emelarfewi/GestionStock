package com.example.BackEnd.repositories;
import com.example.BackEnd.models.Categorie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategorieRepository extends JpaRepository<Categorie, Long>{
    void deleteCategorieByIdCat(Long id);
    Categorie findCategorieByIdCat(Long id);
}
