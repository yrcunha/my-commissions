import { UserRepository } from './base/user.repository';
import { UserPostgresStrategy } from './typeorm/implementations/postgres/user-pg.strategy';

const contextPostgres = new UserRepository(new UserPostgresStrategy());

// contextPostgres.createUser({
//   name: 'Yuri Rodrigues',
//   cpf: '011',
//   password: 'my:Comissions@123',
// });

// contextPostgres.indexUser('1bd3de5b-d2ce-4fa1-89a0-bc4330ce25f8');
