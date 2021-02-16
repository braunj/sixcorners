import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Entry } from './Entry';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  postUserEntryForm(entryForm: Entry): Observable<any> {
    // return this.http.post(
    //   'https://putsreq.com/0GGFB7Sv1JqTjKDWJI4k',
    //   entryForm

    return of(entryForm);

    // return of(userSettings);
  }
}
