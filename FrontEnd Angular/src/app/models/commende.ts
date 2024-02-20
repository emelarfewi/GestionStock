export class Commende {
  public idCmd!: number;
  public article: String;
  public fournisseur: String;
  public quantite: number;
  public prix: number;

  constructor(article: String, frn: String, quantite: number, prix:number) {
    this.article = article;
    this.fournisseur = frn;
    this.quantite = quantite;
    this.prix = prix;
  }
}
