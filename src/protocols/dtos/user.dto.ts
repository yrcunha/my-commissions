import { EnumStatus } from '../enum/status.enum';
import { AdressDto } from './adress.dto';

export class UserDto
  implements
    Pick<
      AdressDto,
      'zip_code' | 'street' | 'number_house' | 'district' | 'city' | 'state'
    >
{
  id!: string;
  avatar?: string;
  name!: string;
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
  created_at!: Date;
  updated_at!: Date;
}
