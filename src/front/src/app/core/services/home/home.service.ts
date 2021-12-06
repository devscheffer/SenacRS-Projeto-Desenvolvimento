import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PressaoModel } from 'src/app/shared/models/pressao.model';
import { environment } from 'src/environments/environment';

const url = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  read_all(): Observable<PressaoModel[]> {
    return this.http.get<PressaoModel[]>(`${url}/pressao`);
  }
}
