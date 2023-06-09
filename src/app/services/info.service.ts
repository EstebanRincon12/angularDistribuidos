import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get('http://10.4.73.151:30010/api/info');
  }
  getNumbers() {
    return this.http.get('http://10.4.73.151:30011/results');
  }
}
