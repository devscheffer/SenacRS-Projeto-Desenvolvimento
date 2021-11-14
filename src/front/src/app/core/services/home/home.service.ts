import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PneuModel } from 'src/app/shared/models/pneu.model';
import { environment } from 'src/environments/environment';

const url = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  read_all(): Observable<PneuModel[]> {
    return this.http.get<PneuModel[]>(`${url}/pressao`);
  }
}
