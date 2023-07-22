import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private api = 'https://mailthis.to/godricweb.in@gmail.com';

  constructor(private _http: HttpClient) { }

  sendQuery(data: any) {
    return this._http.post(this.api, data, { responseType: 'text'}).pipe(
      map(
        (res: any) => {
          return res;
        },
        (err: any) => {
          return err;
        }
      )
    )
  }
}
