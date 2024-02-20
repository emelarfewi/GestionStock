package com.example.BackEnd.controllers;
import com.example.BackEnd.models.Commende;
import com.example.BackEnd.models.Fournisseur;
import com.example.BackEnd.services.FournisseurService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/fournisseurs")
public class FournisseurController {
    private final FournisseurService fournisseurService;

    public FournisseurController(FournisseurService frnservice) {
        this.fournisseurService = frnservice;
    }

    @GetMapping
    public ResponseEntity<List<Fournisseur>> getAllFournisseurs() {
        List<Fournisseur> fournisseurs = fournisseurService.findAllFournisseurs();
        return new ResponseEntity<>(fournisseurs, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Fournisseur> addFournisseur(@RequestBody Fournisseur fournisseur) {
        Fournisseur newFournisseur = fournisseurService.addFournisseur(fournisseur);
        return new ResponseEntity<>(newFournisseur, HttpStatus.CREATED);
    }

    @GetMapping("/id={id}")
    public ResponseEntity<Fournisseur> getFournisseurByIdFrn(@PathVariable("id") Long id) {
        Fournisseur fournisseur = fournisseurService.findById(id);
        return new ResponseEntity<>(fournisseur, HttpStatus.OK);
    }

    @PutMapping("/id/{id}")
    public ResponseEntity<Fournisseur> updateFournisseurById(@PathVariable("id") Long id, @RequestBody Fournisseur fournisseur) {
        Fournisseur updatedFournisseur = fournisseurService.findById(id);
        updatedFournisseur.setEmail(fournisseur.getEmail());
        updatedFournisseur.setPhone(fournisseur.getPhone());
        updatedFournisseur.setAdresse(fournisseur.getAdresse());
        Fournisseur savedFournisseur = fournisseurService.updateFournisseur(updatedFournisseur);
        return new ResponseEntity<>(savedFournisseur, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteFournisseur(@PathVariable("id") Long id) {
        fournisseurService.deleteFournisseur(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
