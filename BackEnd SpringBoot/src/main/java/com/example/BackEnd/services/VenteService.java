package com.example.BackEnd.services;
import com.example.BackEnd.models.Fournisseur;
import com.example.BackEnd.models.Vente;
import com.example.BackEnd.repositories.VenteRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class VenteService {
    private final VenteRepository venteRepo;

    @Autowired
    public VenteService(VenteRepository venteRepo) {
        this.venteRepo = venteRepo;
    }

    public Vente addVente(Vente vente) {
        return venteRepo.save(vente);
    }

    public List<Vente> findAllVentes() {
        return venteRepo.findAll();
    }

    public Vente updateVente(Vente vente) {
        return venteRepo.save(vente);
    }

    public Vente findById(Long id) {
        return venteRepo.findVenteByIdVnt(id);
    }

    public void deleteVente(Long id) {
        venteRepo.deleteVenteByIdVnt(id);
    }
}
