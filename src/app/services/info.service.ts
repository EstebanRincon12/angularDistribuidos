import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get('http://10.4.74.151:3000/api/info');
  }
  getNumbers() {
    return this.http.get('http://10.4.74.151:8080/results');
  }
}
