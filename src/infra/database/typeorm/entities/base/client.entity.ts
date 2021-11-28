import { ClientDto } from 'protocols/dtos/client.dto';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('clients', { name: 'clients', orderBy: { nickname: 'ASC' } })
export class ClientEntity
  implements
    Pick<
      ClientDto,
      'id' | 'nickname' | 'comments' | 'created_at' | 'updated_at'
    >
{
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id!: string;

  @Column({
    name: 'nickname',
    type: 'varchar',
    length: 100,
  })
  nickname!: string;

  @Column({
    name: 'comments',
    type: 'text',
    nullable: true,
  })
  comments?: string;

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
