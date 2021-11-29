import { EnumStatus } from '../enum/status.enum';
import { AdressDto } from './adress.dto';

export class UserDto {
  id!: string;
  avatar?: string;
  name!: string;
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
  created_at!: Date;
  updated_at!: Date;
}
