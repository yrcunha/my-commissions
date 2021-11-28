import { IUserRepository } from 'protocols/interfaces/repositories/user-repo.interface';

export class SaleRepository {
  public database: IUserRepository;

  constructor(strategy: IUserRepository) {
    this.database = strategy;
  }
}
