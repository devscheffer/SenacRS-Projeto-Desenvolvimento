import { TokenService } from '../../core/services/token/token.service';
import { environment } from './../../../environments/environment';
import { KmModel } from './../../shared/models/quilometragem.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class QuilometragemService {

  constructor(private http: HttpClient) {}

  create(km: KmModel): Observable<KmModel> {
    return this.http.post<KmModel>(`${url}/km`, km);
  }

  read_all(): Observable<KmModel[]> {
    return this.http.get<KmModel[]>(`${url}/km`);
  }

  read_id(id: string): Observable<KmModel> {
    return this.http.get<KmModel>(`${url}/km/${id}`);
  }

  update(id: string, km: KmModel): Observable<any> {
    return this.http.patch(`${url}/km/${id}`, km);
  }

  delete(id: string): Observable<KmModel> {
    return this.http.delete<KmModel>(`${url}/km/${id}`);
  }

}
