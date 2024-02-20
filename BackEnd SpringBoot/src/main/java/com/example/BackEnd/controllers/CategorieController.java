package com.example.BackEnd.controllers;

import com.example.BackEnd.models.Article;
import com.example.BackEnd.models.Categorie;
import com.example.BackEnd.services.CategorieService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
public class CategorieController {
    private final CategorieService categorieService;

    public CategorieController(CategorieService catservice) {
        this.categorieService = catservice;
    }

    @GetMapping
    public ResponseEntity<List<Categorie>> getAllCategories() {
        List<Categorie> categories = categorieService.findAllCategories();
        return new ResponseEntity<>(categories, HttpStatus.OK);
    }

    @GetMapping("/id={id}")
    public ResponseEntity<Categorie> getCategorieByIdCat(@PathVariable("id") Long id) {
        Categorie categorie = categorieService.findById(id);
        return new ResponseEntity<>(categorie, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Categorie> addCategorie(@RequestBody Categorie categorie) {
        Categorie newCategorie = categorieService.addCategorie(categorie);
        return new ResponseEntity<>(newCategorie, HttpStatus.CREATED);
    }

    @PutMapping("/id/{id}")
    public ResponseEntity<Categorie> updateCategorieById(@PathVariable("id") Long id, @RequestBody Categorie categorie) {
        Categorie updatedCategorie = categorieService.findById(id);
        updatedCategorie.setNomCat(categorie.getNomCat());
        Categorie savedCategorie = categorieService.updateCategorie(updatedCategorie);
        return new ResponseEntity<>(savedCategorie, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCategorie(@PathVariable("id") Long id) {
        categorieService.deleteCategorie(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
