import { EnumStatus } from '../enum/status.enum';
import { UserDto } from './user.dto';

export class ClientDto implements UserDto {
  id!: string;
  avatar?: string | undefined;
  name!: string;
  nickname!: string;
  cpf!: string;
  password!: string;
  phone!: string;
  email!: string;
  zip_code!: string;
  street!: string;
  number_house!: string;
  district!: string;
  city!: string;
  state!: string;
  is_admin!: boolean;
  status!: EnumStatus;
  comments?: string;
  created_at!: Date;
  updated_at!: Date;
}
