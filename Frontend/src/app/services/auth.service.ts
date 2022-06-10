import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  AUTH_API = 'http://localhost:8080/api/auth/';

  constructor(private http: HttpClient) {}

  login(credential: User): Observable<any> {
    return this.http.post(this.AUTH_API + 'signin', credential);
  }
}
