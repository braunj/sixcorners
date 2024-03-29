import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('riderName') riderName?: ElementRef | null;

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
      vehiclePlate: ['', [Validators.required]],
      vehicleActive: [false],
    });
  }

  ngAfterViewInit() {
    this.riderName?.nativeElement.focus();
  }

  onSubmit() {
    this.vehicle.active = true;
    this.registrationForm.patchValue({ vehicleActive: this.vehicle.active });
    console.log('submitted: ', this.registrationForm);
    console.log('saved: ', JSON.stringify(this.registrationForm?.value));
  }
}
