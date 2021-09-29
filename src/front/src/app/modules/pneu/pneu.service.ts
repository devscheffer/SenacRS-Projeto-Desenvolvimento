import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const url = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PneuService {

  constructor(private http: HttpClient) { }

  cadastrar() {
    // return this.http.post(`${url}`)
  }
}
