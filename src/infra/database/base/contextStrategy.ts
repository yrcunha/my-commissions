import { IUserRepository } from '../interfaces/IUserRepository';

export class ContextStrategy implements IUserRepository {
  public database: IUserRepository;

  constructor(strategy: IUserRepository) {
    this.database = strategy;
  }
  is_connected() {
    return this.database.is_connected();
  }

  index(): any {
    return this.database.index();
  }

  all(): any {
    return this.database.all();
  }

  create(): any {
    return this.database.create();
  }

  update(): any {
    return this.database.update();
  }

  delete(): any {
    return this.database.delete();
  }
}
