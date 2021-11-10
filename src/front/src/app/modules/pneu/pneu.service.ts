import { TokenService } from './../../core/services/token/token.service';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PneuModel } from '../../shared/models/pneu.model';

const url = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class PneuService {

  constructor( private http: HttpClient ) {}

  create(pneu: PneuModel): Observable<PneuModel> {
    return this.http.post<PneuModel>(`${url}/pressao`, pneu);
  }

  read_all(): Observable<PneuModel[]> {
    return this.http.get<PneuModel[]>(`${url}/pressao`);
  }

  read_id(id: number): Observable<PneuModel> {
    return this.http.get<PneuModel>(`${url}/pressao/${id}`);
  }

  update(id: number, pneu: PneuModel): Observable<any> {
    return this.http.patch(`${url}/${id}`, pneu);
  }

  delete(id: number): Observable<PneuModel> {
    return this.http.delete<PneuModel>(`${url}/${id}`);
  }

}
