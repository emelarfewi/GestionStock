export class Client {
  public idClt!: number;
  public nomClt: String;
  public prenomClt: String;
  public email: String;
  public phone: number;
  public adresse: String;


  constructor(nom: String, prenom: String, email: String, phone: number, adresse: String) {
    this.nomClt = nom ;
    this.prenomClt = prenom;
    this.email = email;
    this.phone = phone;
    this.adresse = adresse;

  }
}
