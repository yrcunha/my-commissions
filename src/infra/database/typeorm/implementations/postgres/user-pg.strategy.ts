import { UserDto } from '@/protocol/dtos/user.dto';
import { IUserRepository } from '@/protocol/interfaces/user.interface';
import { Connection } from 'typeorm';
import { ConnectionStrategy } from '../connection.strategy';

export class UserPostgresStrategy
  extends ConnectionStrategy
  implements IUserRepository
{
  private connection!: Connection;

  constructor() {
    super();
  }
  indexUser(
    id: string
  ): Promise<Omit<UserDto, 'is_admin' | 'status' | 'updated_at'>> {
    throw new Error('Method not implemented.');
  }
  createUser(
    data: Omit<
      UserDto,
      'is_admin' | 'status' | 'updated_at' | 'id' | 'name' | 'created_at'
    >
  ): Promise<void> {
    throw new Error('Method not implemented.');
  }

  updateUser(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  deleteUser(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
