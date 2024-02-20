package com.example.BackEnd.repositories;

import com.example.BackEnd.models.Vente;
import org.springframework.data.jpa.repository.JpaRepository;
public interface VenteRepository extends JpaRepository<Vente, Long> {
    void deleteVenteByIdVnt(Long id);
    Vente findVenteByIdVnt(Long id);
}
