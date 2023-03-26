import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get('http://192.168.0.12:3000/api/info');
  }
  getNumbers() {
    return this.http.get('http://192.168.0.12:8080/results');
  }
}
