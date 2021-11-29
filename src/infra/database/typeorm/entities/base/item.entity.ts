import { ItemDto } from 'protocols/dtos/item.dto';
import { EnumItem } from 'protocols/enum/item.enum';
import { EnumStatus } from 'protocols/enum/status.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('items', { name: 'items', orderBy: { name: 'ASC' } })
export class ItemEntity implements ItemDto {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id!: string;

  @Column({
    name: 'image',
    type: 'varchar',
    nullable: true,
    length: 100,
  })
  image?: string;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 100,
  })
  name!: string;

  @Column({
    name: 'type',
    type: 'enum',
    enumName: 'item',
  })
  type!: EnumItem;

  @Column({
    name: 'description',
    type: 'text',
  })
  description!: string;

  @Column({
    name: 'reference_price',
    type: 'money',
  })
  reference_price!: number;

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
}
