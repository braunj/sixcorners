import { Address } from './Address';

export class Rider {
  constructor(
    public mobile: string,
    public name: string,
    public nickname: string,
    public email: string,
    public emailUpdates = true,
    public commPref: string,
    public note: string
  ) {}
}
