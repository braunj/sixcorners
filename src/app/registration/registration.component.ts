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
  rider: Rider = {
    name: '',
    nickname: '',
    email: '',
    emailUpdates: true,
    text: '',
  };

  vehicle: Vehicle = {
    year: '',
    make: '',
    model: '',
    color: '',
    vin4: '', // last 4 numbers
  };

  entry: Entry = {
    idx: 0,
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
