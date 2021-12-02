import { TokenService } from '../../core/services/token/token.service';
import { environment } from '../../../environments/environment';
import { PressaoModel } from '../../shared/models/pressao.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class PressaoService {

  constructor( private http: HttpClient ) {}

  create(pressao: PressaoModel): Observable<PressaoModel> {
    return this.http.post<PressaoModel>(`${url}/pressao`, pressao);
  }

  read_all(): Observable<PressaoModel[]> {
    return this.http.get<PressaoModel[]>(`${url}/pressao`);
  }

  read_id(id: string): Observable<PressaoModel> {
    return this.http.get<PressaoModel>(`${url}/pressao/${id}`);
  }

  update(id: string, pressao: PressaoModel): Observable<any> {
    return this.http.patch(`${url}/pressao/${id}`, pressao);
  }

  delete(id: string): Observable<PressaoModel> {
    return this.http.delete<PressaoModel>(`${url}/pressao/${id}`);
  }

}
