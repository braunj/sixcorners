import { EntryClass } from './EntryClass';
import { Rider } from './Rider';
import { Vehicle } from './Vehicle';

export interface Entry {
  mobile: string; // index
  towel: string;
  rider: Rider;
  vehicle: Vehicle;
  entryClass: EntryClass;
  entryDate: Date;
}
