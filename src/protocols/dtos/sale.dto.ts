import { EnumStage } from '../enum/stage.enum';
import { EnumStatus } from '../enum/status.enum';
import { RegisterSaleDto } from './register-sale.dto';

export class SaleDto {
  id!: string;
  identity!: string;
  records!: Array<Omit<RegisterSaleDto, 'id' | 'created_at' | 'updated_at'>>;
  amount_total!: number;
  comission!: number;
  stage!: EnumStage;
  status!: EnumStatus;
  created_at!: Date;
  updated_at!: Date;
}
