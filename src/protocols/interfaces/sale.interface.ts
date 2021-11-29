export interface ISaleRepository {
  indexSale(id: string): Promise<any>;

  allSale(): Promise<any>;

  createSale(data: any): Promise<void>;

  updateSale(): Promise<void>;

  stageSale(): Promise<void>;

  deleteSale(): Promise<void>;
}
