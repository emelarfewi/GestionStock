package com.example.BackEnd.services;

import com.example.BackEnd.models.Client;
import com.example.BackEnd.repositories.ClientRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class ClientService {
    private final ClientRepository clientRepo;

    @Autowired
    public ClientService(ClientRepository cltrepo) {
        this.clientRepo = cltrepo;
    }

    public Client addClient (Client client) {
        return clientRepo.save(client);
    }

    public List<Client> findAllClients() {
        return clientRepo.findAll() ;
    }

    public Client updateClient (Client client){
        return clientRepo.save(client);
    }

    public Client findById(Long Id) {
        return clientRepo.findClientByIdClt(Id);
    }

    public void deleteClient(Long Id) {
        clientRepo.deleteClientByIdClt(Id);
    }
}
