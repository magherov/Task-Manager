import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Attivita } from "../types/types";

const baseUrl = environment.API_URL;
const apiTaskBaseUrl = baseUrl + "task";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getAllTask(): Observable<Attivita[]> {
    return this.http.get<Attivita[]>(apiTaskBaseUrl + "/search");
  }

  getAllTaskFake(): Observable<Attivita[]>{
    return this.http.get<Attivita[]>(environment.FakeServerUrl + "task");
  }

  getTaskByUser(utente: string): Observable<Attivita[]> {
    const params = new HttpParams().set("utente", utente);
    return this.http.get<Attivita[]>(apiTaskBaseUrl + "/searchTaskByUser", {
      params,
    });
  }

  getTaskFiltered(stato: string): Observable<Attivita[]> {
    return this.http.post<Attivita[]>(
      apiTaskBaseUrl + "/search/filtered",
      stato
    );
  }

  inserTask(task: Attivita): Observable<boolean> {
    return this.http.put<boolean>(apiTaskBaseUrl + "/inserimento", task);
  }

  inserTaskFake(task: Attivita): Observable<boolean> {
    return this.http.post<boolean>(environment.FakeServerUrl + "task", { task });
  }

  deleteTask(pk: number):Observable<boolean> {
    return this.http.delete<boolean>(apiTaskBaseUrl + `/${pk}`);
  }

  deleteFakeTask(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${environment.FakeServerUrl}task/${id}`);
  }
}
