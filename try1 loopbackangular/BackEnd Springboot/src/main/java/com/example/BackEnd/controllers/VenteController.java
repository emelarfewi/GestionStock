package com.example.BackEnd.controllers;

import com.example.BackEnd.models.Fournisseur;
import com.example.BackEnd.models.Vente;
import com.example.BackEnd.services.VenteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ventes")
public class VenteController {
    private final VenteService venteService;

    @Autowired
    public VenteController(VenteService venteService) {
        this.venteService = venteService;
    }

    @GetMapping
    public List<Vente> getAllVentes() {
        return venteService.findAllVentes();
    }

    @GetMapping("/id={id}")
    public ResponseEntity<Vente> getVenteByIdVnt(@PathVariable("id") Long id) {
        Vente vente = venteService.findById(id);
        return new ResponseEntity<>(vente, HttpStatus.OK);
    }


    @PostMapping
    public Vente addVente(@RequestBody Vente vente) {
        return venteService.addVente(vente);
    }

    @PutMapping("/id/{id}")
    public Vente updateVenteById(@PathVariable("id") Long id, @RequestBody Vente vente) {
        Vente updatedVente = venteService.findById(id);
        updatedVente.setArticle(vente.getArticle());
        updatedVente.setClient(vente.getClient());
        updatedVente.setQuantite(vente.getQuantite());
        updatedVente.setPrix(vente.getPrix());
        return venteService.updateVente(updatedVente);
    }

    @DeleteMapping("/{id}")
    public void deleteVente(@PathVariable("id") Long id) {
        venteService.deleteVente(id);
    }
}
