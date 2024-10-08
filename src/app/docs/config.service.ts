import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {}

  // Making requests
  fetchJSONData(): void {
    this.http.get<unknown>('/api/config').subscribe((config) => {
      return config;
    });
    // 'unknown' data type if you dont know the shape of the data that's coming in from the backend.
  }

  // Mutating server state
  postData(): void {
    // can be any data type
    const newConfig = {};
    this.http.post<any>('/api/config', newConfig).subscribe((config) => {
      console.log('Updated config:', config);
    });
  }

  // setting url parameters
  setURLParams() {
    this.http
      .get('/api/config', { params: { filter: 'all' } })
      .subscribe((config) => {
        // .... ;
      });

    // or

    const baseParams = new HttpParams().set('filter', 'all');
    this.http
      .get('/api/config', {
        params: baseParams.set('details', 'enabled'),
      })
      .subscribe((config) => {
        // ...
      });
  }
}
