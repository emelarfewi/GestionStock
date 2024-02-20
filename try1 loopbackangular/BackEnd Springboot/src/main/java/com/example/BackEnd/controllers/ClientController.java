package com.example.BackEnd.controllers;

import com.example.BackEnd.models.Article;
import com.example.BackEnd.models.Client;
import com.example.BackEnd.services.ClientService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clients")
public class ClientController {
    private final ClientService clientService;

    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping
    public ResponseEntity<List<Client>> getAllClients() {
        List<Client> clients = clientService.findAllClients();
        return new ResponseEntity<>(clients, HttpStatus.OK);
    }

    @GetMapping("/id={id}")
    public ResponseEntity<Client> getClientByIdClt(@PathVariable("id") Long id) {
        Client client = clientService.findById(id);
        return new ResponseEntity<>(client, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Client> addUser(@RequestBody Client client) {
        Client newClient = clientService.addClient(client);
        return new ResponseEntity<>(newClient, HttpStatus.CREATED);
    }


    @PutMapping("/id/{id}")
    public ResponseEntity<Client> updateUserById(@PathVariable("id") Long id, @RequestBody Client client) {
        Client updatedClient = clientService.findById(id);
        updatedClient.setEmail(client.getEmail());;
        updatedClient.setPhone(client.getPhone());
        updatedClient.setAdresse(client.getAdresse());
        Client savedClient = clientService.updateClient(updatedClient);
        return new ResponseEntity<>(savedClient, HttpStatus.OK);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteClient(@PathVariable("id") Long id) {
        clientService.deleteClient(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
