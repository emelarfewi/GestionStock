package com.example.BackEnd.models;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table
public class Commende implements Serializable {

    //Attributes//
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idCmd;

    @Column(nullable = false)
    private String article;

    @Column(nullable = false)
    private  String fournisseur;

    @Column(nullable = false)
    private int quantite;

    @Column(nullable = false)
    private double prix;

    //Constructors//
    public Commende() {}

    public Commende(String art, String frn, int quantite, double prix) {
        this.article = art;
        this.fournisseur = frn;
        this.quantite = quantite;
        this.prix = prix;
    }

    //getters & setters//
    public Long getIdCmd() {
        return idCmd;
    }

    public void setIdCmd(Long idCmd) {
        this.idCmd = idCmd;
    }

    public String getArticle() {
        return article;
    }

    public void setArticle(String art) {
        this.article = art;
    }

    public String getFournisseur() {
        return fournisseur;
    }

    public void setFournisseur(String fournisseur) {
        this.fournisseur = fournisseur;
    }

    public int getQuantite() {
        return quantite;
    }

    public void setQuantite(int quantite) {
        this.quantite = quantite;
    }

    public double getPrix() {
        return prix;
    }

    public void setPrix(double prix) {
        this.prix = prix;
    }

    //toString//
    @Override
    public String toString() {
        return "Commande{" +
                "idCmd=" + idCmd +
                ", Article='" + article + '\'' +
                ", Fournisseur='" + fournisseur + '\'' +
                ", quantite=" + quantite +
                ", prix=" + prix +
                '}';
    }
}
