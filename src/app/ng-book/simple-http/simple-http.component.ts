import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrl: './simple-http.component.css',
})
export class SimpleHttpComponent {
  data: Object;
  loading: boolean;

  constructor(private http: HttpClient) {}

  makeRequest() {
    this.loading = true;
    this.http
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe((data) => {
        this.data = data;
        this.loading = false;
        console.log(data);
      });
  }
}
