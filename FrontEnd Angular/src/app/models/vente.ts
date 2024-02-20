export class Vente {
  public idVnt!: number;
  public article: String;
  public client: String;
  public quantite: number;
  public prix: number;

  constructor(article: String, clt: String, quantite: number, prix:number) {
    this.article = article;
    this.client = clt;
    this.quantite = quantite;
    this.prix = prix;
  }
}
