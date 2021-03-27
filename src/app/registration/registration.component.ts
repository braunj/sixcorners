import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DataService } from '../data/data.service';
import { Rider } from '../data/Rider';
import { Vehicle } from '../data/Vehicle';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  rider = new Rider('', '', '', '', true, '', '');
  year = new Date().getFullYear();
  vehicle = new Vehicle('', this.year, '', '', '', '', false);

  registrationForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private data: DataService) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      riderName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      riderEmail: ['', [Validators.required, Validators.email]],
      riderEmailUpdates: true,
      vehicleMobile: [
        '',
        [
          Validators.required,
          ,
          Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
        ],
      ],
      vehicleYear: [this.year, Validators.required],
      vehicleMake: ['', Validators.required],
      vehicleModel: ['', Validators.required],
      vehicleColor: ['', Validators.required],
      vehicleVin6: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
      ],
      vehicleActive: [false],
    });
  }

  onSubmit() {
    this.vehicle.active = true;
    this.registrationForm.patchValue({ vehicleActive: this.vehicle.active });
    console.log('submitted: ', this.registrationForm);
    console.log('saved: ', JSON.stringify(this.registrationForm?.value));
  }
}
