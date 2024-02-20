export class User {
  public id!: number;
  public nom: String;
  public prenom: String;
  public email: String;
  public password: String;



  constructor(nom: String, prenom: String, email: String, password: String) {
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.password = password;

  }
}
