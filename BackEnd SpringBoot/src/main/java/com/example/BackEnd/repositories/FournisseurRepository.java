package com.example.BackEnd.repositories;
import com.example.BackEnd.models.Fournisseur;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FournisseurRepository extends JpaRepository<Fournisseur, Long>{
    void deleteFournisseurByIdFrn(Long id);
    Fournisseur findFournisseurByIdFrn(Long id);
}
