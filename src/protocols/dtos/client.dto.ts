import { EnumStatus } from '../enum/status.enum';
import { AdressDto } from './adress.dto';
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
  adress!: Pick<
    AdressDto,
    'zip_code' | 'street' | 'number_house' | 'district' | 'city' | 'state'
  >;
  is_admin!: boolean;
  status!: EnumStatus;
  comments?: string;
  created_at!: Date;
  updated_at!: Date;
}
