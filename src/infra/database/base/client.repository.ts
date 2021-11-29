export class ClientRepository {
  public database: any;

  constructor(strategy: any) {
    this.database = strategy;
  }
}
