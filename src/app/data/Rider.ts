import { Address } from './Address';

export interface Rider {
  mobile: string; // index
  name: string;
  nickname: string;
  email: string;
  emailUpdates: boolean;
  commPref: string;
  note: string;
}
