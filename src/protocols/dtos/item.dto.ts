import { EnumStatus } from 'protocols/enum/status.enum';
import { EnumItem } from '../enum/item.enum';

export class ItemDto {
  id!: string;
  image!: string;
  name!: string;
  type!: EnumItem;
  description!: string;
  reference_price!: number;
  status!: EnumStatus;
  created_at!: Date;
  updated_at!: Date;
}
