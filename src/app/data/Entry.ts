import { EntryClass } from './EntryClass';
import { Rider } from './Rider';
import { Vehicle } from './Vehicle';

export class Entry {
  constructor(
    mobile: string, // index
    towel: string,
    rider: Rider,
    vehicle: Vehicle,
    entryClass: EntryClass,
    entryDate: Date
  ) {}
}
