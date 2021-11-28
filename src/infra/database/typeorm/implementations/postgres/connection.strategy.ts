import path from 'path';
import { createConnection } from 'typeorm';
import { postgres_options } from '../../../config/typeorm.config';
import { UserEntity } from '../../entities/base/user.entity';

export class ConnectionStrategy {
  constructor() {}

  protected async start_db() {
    return await createConnection({
      ...postgres_options,
      entities: [
        path.resolve(__dirname, '../../entities/base/adress.entity.ts'),
        path.resolve(__dirname, '../../entities/base/client.entity.ts'),
        path.resolve(__dirname, '../../entities/base/contact.entity.ts'),
        path.resolve(
          __dirname,
          '../../entities/base/information-item.entity.ts'
        ),
        path.resolve(
          __dirname,
          '../../entities/base/register-sale-items.entity.ts'
        ),
        path.resolve(__dirname, '../../entities/base/sale.entity.ts'),
        path.resolve(__dirname, '../../entities/base/user.entity.ts'),
      ],
    });
  }

  protected async userRepository() {
    const repository = await this.start_db();
    return repository.getRepository(UserEntity);
  }
}
