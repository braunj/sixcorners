import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Rider } from './Rider';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  url = 'https://putsreq.com/0r400vgJfIw0305hiaM6';
  constructor(private http: HttpClient) {}

  postRiderInfo(rider: Rider): Observable<any> {
    return this.http.post(this.url, rider);

    //  response.status = 200; // default value
    //  response.headers = {}; // default value
    //  var parsedBody = JSON.parse(request.body);
    //  parsedBody.idx = 305; // arbitrary value
    //  response.body = parsedBody;

    // response.status = 400;
    // response.body = { errorMessage: 'Something wrong!' };
  }
}
