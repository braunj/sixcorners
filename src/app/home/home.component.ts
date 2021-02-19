import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { EntryClass } from '../data/EntryClass';
import { Rider } from '../data/Rider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  rider: Rider = {
    mobile: '',
    name: '',
    nickname: '',
    email: '',
    emailUpdates: true,
    note: '',
    commPref: 'text',
  };

  postError = false;
  postErrorMsg = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  onFocus(field: NgModel) {
    console.log('onFocus', field.pristine);
  }
  onBlur(field: NgModel) {
    console.log('onBlur', field.valid);
  }

  onHttpSuccess(result: any) {
    console.log('Success: ', result);
    this.postError = false;
    this.postErrorMsg = '';
  }

  onHttpError(errorResponse: any) {
    console.log('Error: ', errorResponse);
    this.postError = true;
    this.postErrorMsg = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.dataService.postRiderInfo(this.rider).subscribe(
        (result) => this.onHttpSuccess(result),
        (error) => this.onHttpError(error)
      );
    } else {
      this.postError = true;
      this.postErrorMsg = 'Please review the errors above';
    }
  }
}
