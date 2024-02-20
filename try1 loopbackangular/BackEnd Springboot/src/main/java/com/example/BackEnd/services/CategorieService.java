package com.example.BackEnd.services;

import com.example.BackEnd.models.Categorie;
import com.example.BackEnd.repositories.CategorieRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class CategorieService {
    private final CategorieRepository categorieRepo;

    @Autowired
    public CategorieService(CategorieRepository catrepo) {
        this.categorieRepo = catrepo;
    }

    public Categorie addCategorie(Categorie categorie) {
        return categorieRepo.save(categorie);
    }

    public List<Categorie> findAllCategories() {
        return categorieRepo.findAll();
    }

    public Categorie updateCategorie(Categorie categorie) {
        return categorieRepo.save(categorie);
    }

    public Categorie findById(Long id) {
        return categorieRepo.findCategorieByIdCat(id);
    }

    public void deleteCategorie(Long id) {
        categorieRepo.deleteCategorieByIdCat(id);
    }
}
