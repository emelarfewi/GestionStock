package com.example.BackEnd.models;

import jakarta.persistence.*;
import java.io.Serializable;

@Entity
@Table
public class Categorie implements Serializable {

    //Attributes//
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long idCat;

    @Column(nullable = false)
    private String nomCat;

    //Constructors//
    public Categorie() {}

    public Categorie(String nomCat) {
        this.nomCat = nomCat;
    }

    //getters & setters//
    public Long getIdCat() {
        return idCat;
    }

    public void setIdCat(Long idCat) {
        this.idCat = idCat;
    }

    public String getNomCat() {
        return nomCat;
    }

    public void setNomCat(String nomCat) {
        this.nomCat = nomCat;
    }

    //toString//
    @Override
    public String toString() {
        return "Categorie{" +
                "idCat=" + idCat +
                ", nomCat='" + nomCat + '\'' +
                '}';
    }
}
