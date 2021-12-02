import { ManutencaoModel } from './../../shared/models/manutencao.model';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class ManutencaoService {
  constructor(private http: HttpClient) {}

  create(pneu: ManutencaoModel): Observable<ManutencaoModel> {
    return this.http.post<ManutencaoModel>(`${url}/manutencao`, pneu);
  }

  read_all(): Observable<ManutencaoModel[]> {
    return this.http.get<ManutencaoModel[]>(`${url}/manutencao`);
  }

  read_id(id: string): Observable<ManutencaoModel> {
    return this.http.get<ManutencaoModel>(`${url}/manutencao/${id}`);
  }

  update(id: string, pneu: ManutencaoModel): Observable<any> {
    return this.http.patch(`${url}/manutencao/${id}`, pneu);
  }

  delete(id: string): Observable<ManutencaoModel> {
    return this.http.delete<ManutencaoModel>(`${url}/manutencao/${id}`);
  }
}
