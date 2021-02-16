import { Component, OnInit } from '@angular/core';
import { Address } from '../data/Address';
import { DataService } from '../data/data.service';
import { Entry } from '../data/Entry';
import { Rider } from '../data/Rider';
import { Vehicle } from '../data/Vehicle';

import EntryClass from '../data/EntryClass';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  constructor(
    private data: DataService,
    private address: Address,
    private entry: Entry,
    private rider: Rider,
    private vehicle: Vehicle,
    private entryClass: EntryClass
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log('submitted');
  }
}
