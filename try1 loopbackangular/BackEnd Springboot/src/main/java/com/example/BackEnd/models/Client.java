package com.example.BackEnd.models;

import jakarta.persistence.*;
import java.io.Serializable;

@Entity
@Table
public class Client implements Serializable {

    //Attributes//
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idClt;

    @Column(nullable = false)
    private String nomClt;

    @Column(nullable = false)
    private String prenomClt;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private int phone;

    @Column(nullable = false)
    private String adresse;

    //Constructors//
    public Client() {}

    public Client(String nomClt, String prenomClt, String email, String jobTitle, int phone, String adr) {
        this.nomClt = nomClt;
        this.prenomClt = prenomClt;
        this.email = email;
        this.phone = phone;
        this.adresse = adr;
    }

    //getters & setters//

    public Long getIdClt() {
        return idClt;
    }

    public void setIdClt(Long idClt) {
        this.idClt = idClt;
    }

    public String getNomClt() {
        return nomClt;
    }

    public void setNomClt(String nomClt) {
        this.nomClt = nomClt;
    }

    public String getPrenomClt() {
        return prenomClt;
    }

    public void setPrenomClt(String prenomClt) {
        this.prenomClt = prenomClt;
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

    public void setAdresse(String adr) {
        this.adresse = adr;
    }

    //toString//
    @Override
    public String toString() {
        return "Client{" +
                "idClt=" + idClt +
                ", nomClt='" + nomClt + '\'' +
                ", prenomClt='" + prenomClt + '\'' +
                ", email='" + email + '\'' +
                ", phone=" + phone +
                ", adresse='" + adresse + '\'' +
                '}';
    }

}
