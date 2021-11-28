import { IUserRepository } from 'protocols/interfaces/repositories/user-repo.interface';

export class ClientRepository {
  public database: IUserRepository;

  constructor(strategy: IUserRepository) {
    this.database = strategy;
  }
}
