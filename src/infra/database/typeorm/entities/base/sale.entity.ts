import { SaleDto } from 'protocols/dtos/sale.dto';
import { EnumStage } from 'protocols/enum/stage.enum';
import { EnumStatus } from 'protocols/enum/status.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ulid } from 'ulid';

@Entity('sales', { name: 'sales', orderBy: { identity: 'ASC' } })
export class SaleEntity implements Omit<SaleDto, 'records'> {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id!: string;

  @Column({
    name: 'identity',
    type: 'varchar',
    length: 26,
  })
  identity!: string;

  @Column({
    name: 'amount_total',
    type: 'money',
  })
  amount_total!: number;

  @Column({
    name: 'comission',
    type: 'money',
  })
  comission!: number;

  @Column({
    name: 'stage',
    type: 'enum',
    enumName: 'stage',
    default: EnumStage.NEGOCIACAO,
  })
  stage!: EnumStage;

  @Column({
    name: 'status',
    type: 'enum',
    enumName: 'status',
    default: EnumStatus.ATIVO,
  })
  status!: EnumStatus;

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

  constructor() {
    if (!this.identity) {
      this.identity = ulid();
    }
  }
}
