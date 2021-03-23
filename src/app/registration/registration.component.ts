import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DataService } from '../data/data.service';
import { Rider } from '../data/Rider';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  rider = new Rider('', '', '', '', true, '', '');
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
    });
  }

  onSubmit() {
    console.log('submitted: ', this.registrationForm);
    console.log('saved: ', JSON.stringify(this.registrationForm?.value));
  }
}
