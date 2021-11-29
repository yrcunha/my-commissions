export class ItemRepository {
  public database: any;

  constructor(strategy: any) {
    this.database = strategy;
  }
}
