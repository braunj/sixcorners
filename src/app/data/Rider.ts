import { Address } from './Address';

export interface Rider {
  name: string;
  nickname: string;
  email: string;
  emailUpdates: boolean;
  sms: string;
  note: string;
}
