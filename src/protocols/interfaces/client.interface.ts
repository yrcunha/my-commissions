export interface IClientRepository {
  indexClient(id: string): Promise<any>;

  allClient(): Promise<any>;

  createUser(data: any): Promise<void>;

  updateUser(id: string): Promise<void>;

  deleteUser(id: string): Promise<void>;
}
