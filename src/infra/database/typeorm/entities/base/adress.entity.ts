import { AdressDto } from 'protocols/dtos/adress.dto';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('adresses', {
  name: 'adresses',
  orderBy: {
    street: 'ASC',
    city: 'ASC',
    state: 'ASC',
  },
})
export class AdressEntity implements AdressDto {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id!: string;

  @Column({
    name: 'zip_code',
    type: 'varchar',
    length: 8,
  })
  zip_code!: string;

  @Column({
    name: 'street',
    type: 'varchar',
    length: 100,
  })
  street!: string;

  @Column({
    name: 'number_house',
    type: 'varchar',
    length: 10,
    default: 'Não informado',
  })
  number_house!: string;

  @Column({
    name: 'district',
    type: 'varchar',
    length: 100,
  })
  district!: string;

  @Column({
    name: 'city',
    type: 'varchar',
    length: 100,
  })
  city!: string;

  @Column({
    name: 'state',
    type: 'varchar',
    length: 2,
  })
  state!: string;

  @Column({
    name: 'default',
    type: 'boolean',
    default: true,
  })
  default!: string;

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
