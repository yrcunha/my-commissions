import { UserDto } from 'protocols/dtos/user.dto';

export interface IUserRepository {
  indexUser(
    id: string
  ): Promise<Omit<UserDto, 'is_admin' | 'status' | 'updated_at'>>;

  createUser(
    data: Omit<
      UserDto,
      'id' | 'name' | 'is_admin' | 'status' | 'created_at' | 'updated_at'
    >
  ): Promise<void>;

  updateUser(id: string): Promise<void>;

  deleteUser(id: string): Promise<void>;
}
