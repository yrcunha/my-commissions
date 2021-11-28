import { EnumCalculateBase } from '../enum/calculate-base.enum';
import { EnumItem } from '../enum/item.enum';
import { ItemDto } from './item.dto';

export class RegisterSaleDto
  implements Pick<ItemDto, 'image' | 'name' | 'type' | 'description'>
{
  id!: string;
  image!: string;
  name!: string;
  type!: EnumItem;
  description!: string;
  amount_item!: number;
  fix_value!: string;
  calculation_base!: EnumCalculateBase;
  created_at!: Date;
  updated_at!: Date;
}
