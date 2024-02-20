package com.example.BackEnd.controllers;

import com.example.BackEnd.models.Categorie;
import com.example.BackEnd.models.Commende;
import com.example.BackEnd.services.CommendeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/commendes")
public class CommendeController {
    private final CommendeService commendeService;

    @Autowired
    public CommendeController(CommendeService commendeService) {
        this.commendeService = commendeService;
    }

    @GetMapping
    public List<Commende> getAllCommendes() {
        return commendeService.findAllCommendes();
    }

    @GetMapping("/id={id}")
    public ResponseEntity<Commende> getCommendeByIdCmd(@PathVariable("id") Long id) {
        Commende commende = commendeService.findById(id);
        return new ResponseEntity<>(commende, HttpStatus.OK);
    }

    @PostMapping
    public Commende addCommende(@RequestBody Commende commende) {
        return commendeService.addCommende(commende);
    }

    @DeleteMapping("/{id}")
    public void deleteCommende(@PathVariable("id") Long id) {
        commendeService.deleteCommende(id);
    }

}
