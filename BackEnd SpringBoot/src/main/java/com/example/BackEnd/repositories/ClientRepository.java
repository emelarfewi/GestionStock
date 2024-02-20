package com.example.BackEnd.repositories;

import com.example.BackEnd.models.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository  extends JpaRepository<Client, Long> {
    void deleteClientByIdClt(Long id);
    Client findClientByIdClt(Long id);

}
