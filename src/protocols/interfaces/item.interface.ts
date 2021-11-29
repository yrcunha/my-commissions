export interface ISaleRepository {
  indexItem(id: string): Promise<any>;

  allItem(): Promise<any>;

  createItem(data: any): Promise<void>;

  updateItem(): Promise<void>;

  deleteItem(): Promise<void>;
}
