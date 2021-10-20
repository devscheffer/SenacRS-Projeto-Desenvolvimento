import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PneuModel } from './../../shared/models/pneu.model';

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
    this.route = '/pressao';
    this.path = `${this.uri}${this.route}`;
  }

  create(pneu: PneuModel): Observable<PneuModel> {
    return this.http.post<PneuModel>(`${this.path}/`, pneu);
  }
  read_all(): Observable<PneuModel[]> {
    return this.http.get<PneuModel[]>(`${this.path}/`);
  }
  read_id(id: number): Observable<PneuModel> {
    return this.http.get<PneuModel>(`${this.path}/${id}`);
  }
  update(id: number, pneu: PneuModel): Observable<any> {
    return this.http.patch(`${url}/${id}`, pneu);
  }
  delete(id: number): Observable<PneuModel> {
    return this.http.delete<PneuModel>(`${url}/${id}`);
  }
}
