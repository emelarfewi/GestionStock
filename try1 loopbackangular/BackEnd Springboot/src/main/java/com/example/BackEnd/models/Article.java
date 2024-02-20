package com.example.BackEnd.models;

import jakarta.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table
public class Article implements Serializable{

    //Attributes//
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idArt;

    @Column(nullable = false)
    private String nomArt;

    @Column(nullable = false)
    private String categorie;

    @Column(nullable = false)
    private int quantite;

    @Column(nullable = false)
    private double prixUnit;

    @Column(nullable = false)
    private String dateFabrication;

    @Column(nullable = false)
    private String dateExpiration;

    //Constructors//
    public Article() {}

public Article(String nomArt, String categorie, int quantite, double prixUnit, String dateFabrication, String dateExpiration) {
        this.nomArt = nomArt;
        this.categorie = categorie;
        this.quantite = quantite;
        this.prixUnit = prixUnit;
        this.dateFabrication = dateFabrication;
        this.dateExpiration = dateExpiration;
    }

    //getters & setters//
    public Long getIdArt() {
        return idArt;
    }

    public void setIdArt(Long idArt) {
        this.idArt = idArt;
    }

    public String getNomArt() {
        return nomArt;
    }

    public void setNomArt(String nomArt) {
        this.nomArt = nomArt;
    }

    public String getCategorie() {
        return categorie;
    }

    public void setCategorie(String categorie) {
        this.categorie = categorie;
    }

    public int getQuantite() {
        return quantite;
    }

    public void setQuantite(int quantite) {
        this.quantite = quantite;
    }

    public double getPrixUnit() {
        return prixUnit;
    }

    public void setPrixUnit(double prixUnit) {
        this.prixUnit = prixUnit;
    }

    public String getDateFabrication() {
        return dateFabrication;
    }

    public void setDateFabrication(String dateFabrication) {
        this.dateFabrication = dateFabrication;
    }

    public String getDateExpiration() {
        return dateExpiration;
    }

    public void setDateExpiration(String dateExpiration) {
        this.dateExpiration = dateExpiration;
    }

    //toString//
    @Override
    public String toString() {
        return "Article{" +
                "idArt=" + idArt +
                ", nomArt='" + nomArt + '\'' +
                ", categorie='" + categorie + '\'' +
                ", quantite=" + quantite +
                ", prixUnit=" + prixUnit +
                ", dateFabrication=" + dateFabrication +
                ", dateExpiration=" + dateExpiration +
                '}';
    }
}
