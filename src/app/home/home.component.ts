import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Rider } from '../data/Rider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  rider: Rider = {
    name: '',
    nickname: '',
    email: '',
    emailUpdates: true,
    text: '',
  };

  constructor() {}

  ngOnInit(): void {}

  onFocus(field: NgModel) {
    console.log('onFocus', field.pristine);
  }
  onBlur(field: NgModel) {
    console.log('onBlur', field.valid);
  }

  onSubmit(form: NgForm) {
    console.log('in submit ', form.valid);
  }
}
