import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Attivita, Stato } from '../types/types';

const baseUrl = environment.API_URL;
const apiTaskBaseUrl = baseUrl + 'task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getAllTask() {
    return this.http.get<Attivita[]>(apiTaskBaseUrl + '/search');
  }

  getTaskByUser(utente: string): Observable<Attivita[]> {
    const params = new HttpParams().set('utente', utente);
    return this.http.get<Attivita[]>(apiTaskBaseUrl + '/searchTaskByUser', {
      params,
    });
  }

  getTaskFiltered(stato: string) {
    return this.http.post<Attivita[]>(
      apiTaskBaseUrl + '/search/filtered',
      stato
    );
  }

  inserTask(task: Attivita) {
    return this.http.put<boolean>(apiTaskBaseUrl + '/inserimento', { task });
  }

  deleteTask(pk: number) {
    return this.http.delete(apiTaskBaseUrl + `/${pk}`);
  }
}
