import { RegisterSaleDto } from '@/protocol/dtos/register-sale.dto';
import { EnumCalculateBase } from '@/protocol/enum/calculate-base.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('registers_sales_items', {
  name: 'registers_sales_items',
  orderBy: { name: 'ASC' },
})
export class RegisterSaleEntity
  implements
    Pick<
      RegisterSaleDto,
      | 'id'
      | 'amount_item'
      | 'fix_value'
      | 'calculation_base'
      | 'created_at'
      | 'updated_at'
    >
{
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id!: string;

  @Column({
    name: 'amount_item',
    type: 'money',
  })
  amount_item!: number;

  @Column({
    name: 'fix_value',
    type: 'varchar',
    length: 16,
  })
  fix_value!: string;

  @Column({
    name: 'calculation_base',
    type: 'enum',
    enumName: 'calculation_base',
    default: EnumCalculateBase.PERCENTUAL,
  })
  calculation_base!: EnumCalculateBase;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp with time zone',
  })
  created_at!: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp with time zone',
  })
  updated_at!: Date;
}
