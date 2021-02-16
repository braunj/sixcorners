import EntryClass from './EntryClass';
import Classes from './EntryClass';
import { Rider } from './Rider';
import { Vehicle } from './Vehicle';

export class Entry {
  idx: number = 0;
  towel: string = '';
  rider: Rider = new Rider();
  vehicle: Vehicle = new Vehicle();

  constructor(private entryClass: EntryClass) {}
}
