export class User {
  public Id!: number;
  public Nom: string;
  public Prenom: string;
  public Email: string;
  public Password: string;

  constructor(nom: string, prenom: string, email: string, pwd: string) {
    this.Nom = nom;
    this.Prenom = prenom;
    this.Email = email;
    this.Password = pwd;
  }
}
