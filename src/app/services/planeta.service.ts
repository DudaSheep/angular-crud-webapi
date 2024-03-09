import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planeta } from '../models/Planetas';

@Injectable({
  providedIn: 'root'
})
export class PlanetaService {

  private apiUrl = `${environment.ApiUrl}/Planets`

  constructor(private http: HttpClient) { }

  GetPlanetas(): Observable<Planeta[]> {
    return this.http.get<Planeta[]>(this.apiUrl);
  }

  CreatePlaneta(planeta: Planeta): Observable<Planeta[]> {
    return this.http.post<Planeta[]>(`${this.apiUrl}`, planeta);
  }

  GetPlaneta(id: number): Observable<Planeta> {
    return this.http.get<Planeta>(`${this.apiUrl}/${id}`);
  }

  ExcluirPlaneta(id: number): Observable<Planeta[]> {
    return this.http.delete<Planeta[]>(`${this.apiUrl}?id=${id}`);
  }

}
