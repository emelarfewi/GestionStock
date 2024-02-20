package com.example.BackEnd.services;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.BackEnd.models.Fournisseur;
import com.example.BackEnd.repositories.FournisseurRepository;

import java.util.List;

@Service
@Transactional
public class FournisseurService {
    private final FournisseurRepository fournisseurRepo;

    @Autowired
    public FournisseurService(FournisseurRepository frnrepo) {
        this.fournisseurRepo = frnrepo;
    }

    public Fournisseur addFournisseur(Fournisseur fournisseur) {
        return fournisseurRepo.save(fournisseur);
    }

    public Fournisseur updateFournisseur(Fournisseur fournisseur) {
        return fournisseurRepo.save(fournisseur);
    }

    public Fournisseur findById(Long id) {
        return fournisseurRepo.findFournisseurByIdFrn(id);
    }

    public void deleteFournisseur(Long id) {
        fournisseurRepo.deleteFournisseurByIdFrn(id);
    }

public List<Fournisseur> findAllFournisseurs() {
        return fournisseurRepo.findAll();
    }
}
