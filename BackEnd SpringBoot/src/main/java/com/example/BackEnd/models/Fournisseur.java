package com.example.BackEnd.models;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table
public class Fournisseur implements Serializable {

    //Attributes//
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idFrn;

    @Column(nullable = false, updatable = false)
    private String nomFrn;

    @Column(nullable = false, updatable = false)
    private String prenomFrn;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private int phone;

    @Column(nullable = false)
    private String adresse;

    //Constructors//
    public Fournisseur() {}

    public Fournisseur(String nomFrn, String prenomFrn, String email, int phone, String adresse) {
        this.nomFrn = nomFrn;
        this.prenomFrn = prenomFrn;
        this.email = email;
        this.phone = phone;
        this.adresse = adresse;
    }

    //getters & setters//
    public Long getIdFrn() {
        return idFrn;
    }

    public void setIdFrn(Long idFrn) {
        this.idFrn = idFrn;
    }

    public String getNomFrn() {
        return nomFrn;
    }

    public void setNomFrn(String nomFrn) {
        this.nomFrn = nomFrn;
    }

    public String getPrenomFrn() {
        return prenomFrn;
    }

    public void setPrenomFrn(String prenomFrn) {
        this.prenomFrn = prenomFrn;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getPhone() {
        return phone;
    }

    public void setPhone(int phone) {
        this.phone = phone;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    //toString//
    @Override
    public String toString() {
        return "Fournisseur{" +
                "idFrn=" + idFrn +
                ", nomFrn='" + nomFrn + '\'' +
                ", prenomFrn='" + prenomFrn + '\'' +
                ", email='" + email + '\'' +
                ", phone=" + phone +
                ", adresse='" + adresse + '\'' +
                '}';
    }


}
