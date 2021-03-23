export class Vehicle {
  constructor(
    public mobile: string, // index
    public year: number,
    public make: string,
    public model: string,
    public color: string,
    public vin6: string, // last 6 numbers
    public active: boolean
  ) {}
}
