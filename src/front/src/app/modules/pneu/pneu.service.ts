import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pneu } from './pneu.interface';

const url = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class PneuService {
  uri: string;
  route: string;
  path: string;

  constructor(private http: HttpClient) {
    this.uri = 'https://herbie-21.herokuapp.com';
    this.route = 'pressao';
    this.path = `${this.uri}/${this.route}`;
  }

  create(pneu: Pneu): Observable<Pneu> {
    return this.http.post<Pneu>(`${this.path}/`, pneu);
  }
  read_all(): Observable<Pneu[]> {
    return this.http.get<Pneu[]>(`${this.path}/`);
  }
  read_id(id: number): Observable<Pneu> {
    return this.http.get<Pneu>(`${this.path}/${id}`);
  }
  update(id: number, pneu: Pneu): Observable<any> {
    return this.http.patch(`${url}/${id}`, pneu);
  }
  delete(id: number): Observable<Pneu> {
    return this.http.delete<Pneu>(`${url}/${id}`);
  }
}
