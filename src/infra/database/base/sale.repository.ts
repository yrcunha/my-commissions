export class SaleRepository {
  public database: any;

  constructor(strategy: any) {
    this.database = strategy;
  }
}
