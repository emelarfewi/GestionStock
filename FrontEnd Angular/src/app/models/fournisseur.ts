export class Fournisseur {
  public idFrn!: number;
  public nomFrn: String;
  public prenomFrn: String;
  public email: String;
  public phone: number;
  public adresse: String;


  constructor(nom: String, prenom: String, email: String, phone: number, adresse: String) {
    this.nomFrn = nom;
    this.prenomFrn = prenom;
    this.email = email;
    this.phone = phone;
    this.adresse = adresse;
  }
}
