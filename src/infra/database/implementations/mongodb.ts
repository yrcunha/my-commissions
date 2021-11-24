import { IUserRepository } from '../interfaces/IUserRepository';

export class MongoDB implements IUserRepository {
  is_connected(): any {
    console.log('Conectado ao MongoDB');
  }

  index(): any {
    console.log('O item foi obtigo no MongoDB');
  }

  all(): any {
    console.log('Todos os items foram obtigo no MongoDB');
  }

  create(): any {
    console.log('O item foi criado no MongoDB');
  }

  update(): any {
    console.log('O item foi atualizado no MongoDB');
  }

  delete(): any {
    console.log('O item foi deletado no MongoDB');
  }
}
