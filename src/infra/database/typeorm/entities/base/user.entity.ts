import { EnumStatus } from 'protocols/enum/status.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users', { name: 'users', orderBy: { name: 'ASC' } })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id!: string;

  @Column({
    name: 'avatar',
    type: 'varchar',
    length: 150,
    nullable: true,
  })
  avatar?: string;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 100,
  })
  name!: string;

  @Column({
    name: 'cpf',
    type: 'varchar',
    length: 11,
    unique: true,
  })
  cpf!: string;

  @Column({
    name: 'password',
    type: 'varchar',
    length: 36,
    nullable: true,
  })
  password!: string;

  @Column({
    name: 'is_admin',
    type: 'boolean',
    default: true,
  })
  is_admin!: boolean;

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
