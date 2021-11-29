import { UserDto } from '@/protocol/dtos/user.dto';
import { IUserRepository } from '@/protocol/interfaces/user.interface';

export class UserRepository implements IUserRepository {
  public database: IUserRepository;

  constructor(strategy: IUserRepository) {
    this.database = strategy;
  }

  async indexUser(
    id: string
  ): Promise<Omit<UserDto, 'is_admin' | 'status' | 'updated_at'>> {
    return await this.database.indexUser(id);
  }

  async createUser(
    data: Omit<
      UserDto,
      'id' | 'name' | 'is_admin' | 'status' | 'created_at' | 'updated_at'
    >
  ): Promise<void> {
    return await this.database.createUser(data);
  }

  async updateUser(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async deleteUser(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
