import { TelephoneNumber } from '~/types/api/telephoneNumber';

export interface FreeDial {
  data: {
    id: number;
    telephone_number_id: number;
    telephone_number: TelephoneNumber;
  };
}
