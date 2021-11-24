import { IUserRepository } from '../interfaces/IUserRepository';

export class Postgres implements IUserRepository {
  is_connected(): any {
    console.log('Conectado ao Postgres');
  }

  index(): any {
    console.log('O item foi obtigo no Postgres');
  }

  all(): any {
    console.log('Todos os items foram obtigo no Postgres');
  }

  create(): any {
    console.log('O item foi criado no Postgres');
  }

  update(): any {
    console.log('O item foi atualizado no Postgres');
  }

  delete(): any {
    console.log('O item foi deletado no Postgres');
  }
}
