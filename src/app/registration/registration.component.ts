import { Component, OnInit } from '@angular/core';
import { Address } from '../data/Address';
import { DataService } from '../data/data.service';
import { Entry } from '../data/Entry';
import { Rider } from '../data/Rider';
import { Vehicle } from '../data/Vehicle';

import { EntryClass } from '../data/EntryClass';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  // replace with real classes
  // see pluralsight.angular forms.http form posting.retrieving data for select element
  classEnum = ['one', 'two', 'three'];

  rider: Rider = {
    mobile: '',
    name: '',
    nickname: '',
    email: '',
    emailUpdates: true,
    note: '',
    commPref: '',
  };

  vehicle: Vehicle = {
    mobile: '',
    year: '',
    make: '',
    model: '',
    color: '',
    vin4: '', // last 4 numbers
    active: true,
  };

  entry: Entry = {
    mobile: '',
    towel: '',
    rider: this.rider,
    vehicle: this.vehicle,
    entryClass: EntryClass.unknown,
    entryDate: new Date(),
  };

  constructor(private data: DataService, private entryClass: EntryClass) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log('submitted');
  }
}
