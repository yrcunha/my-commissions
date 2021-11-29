import { createConnection } from 'typeorm';
import { postgres_options } from '../../config/typeorm.config';
import { AdressEntity } from '../entities/base/adress.entity';
import { ClientEntity } from '../entities/base/client.entity';
import { ItemEntity } from '../entities/base/item.entity';
import { RegisterSaleEntity } from '../entities/base/register-sale-items.entity';
import { SaleEntity } from '../entities/base/sale.entity';
import { UserEntity } from '../entities/base/user.entity';

export class ConnectionStrategy {
  constructor() {}

  protected async start_db() {
    return await createConnection({
      ...postgres_options,
      entities: [
        AdressEntity,
        ClientEntity,
        ItemEntity,
        RegisterSaleEntity,
        SaleEntity,
        UserEntity,
      ],
      // entities: [
      //   path.resolve(__dirname, '../../entities/base/adress.entity.ts'),
      //   path.resolve(__dirname, '../../entities/base/client.entity.ts'),
      //   path.resolve(__dirname, '../../entities/base/contact.entity.ts'),
      //   path.resolve(
      //     __dirname,
      //     '../../entities/base/information-item.entity.ts'
      //   ),
      //   path.resolve(
      //     __dirname,
      //     '../../entities/base/register-sale-items.entity.ts'
      //   ),
      //   path.resolve(__dirname, '../../entities/base/sale.entity.ts'),
      //   path.resolve(__dirname, '../../entities/base/user.entity.ts'),
      // ],
    });
  }
}
