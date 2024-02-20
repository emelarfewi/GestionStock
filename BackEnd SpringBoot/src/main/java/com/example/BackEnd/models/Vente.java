package com.example.BackEnd.models;

import jakarta.persistence.*;
import java.io.Serializable;

@Entity
@Table
public class Vente implements Serializable {

    //Attributes//
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long idVnt;

    @Column(nullable = false)
    private String Article;

    @Column(nullable = false)
    private  String Client;

    @Column(nullable = false)
    private int quantite;

    @Column(nullable = false)
    private double prix;

    //Constructors//
    public Vente() {}

    public Vente(String Article, String Client, int quantite, double prix) {
        this.Article = Article;
        this.Client = Client;
        this.quantite = quantite;
        this.prix = prix;
    }

    //getters & setters//


    public Long getIdVnt() {
        return idVnt;
    }

    public void setIdVnt(Long idVente) {
        this.idVnt = idVente;
    }

    public String getArticle() {
        return Article;
    }

    public void setArticle(String article) {
        this.Article = article;
    }

    public String getClient() {
        return Client;
    }

    public void setClient(String client) {
        this.Client = client;
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
        return "Vente{" +
                "idVente=" + idVnt +
                ", Article='" + Article + '\'' +
                ", Client='" + Client + '\'' +
                ", quantite=" + quantite +
                ", prix=" + prix +
                '}';
    }
}
