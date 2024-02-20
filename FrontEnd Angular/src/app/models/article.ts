export class Article {
  public idArt!: number;
  public nomArt: String;
  public categorie: String;
  public quantite: number;
  public prixUnit: number;
  public dateFabrication: String;
  public dateExpiration: String;


  constructor(nomArt: String, categorie: String, quantite: number, prixUnit: number, dateFabrication: String, dateExpiration: String) {
    this.nomArt = nomArt;
    this.categorie = categorie;
    this.quantite = quantite;
    this.prixUnit = prixUnit;
    this.dateFabrication = dateFabrication;
    this.dateExpiration = dateExpiration;
}
}
