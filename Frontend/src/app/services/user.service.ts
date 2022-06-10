import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../types/types';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private resourceUrl: string = "User";

  getBaseUrl(){
    return environment.API_URL;
  }

  getBaseUrlResurce(){
    return this.getBaseUrl() + this.resourceUrl;
  }

  constructor(private http: HttpClient)
   { }

   getAllUser(){
     return this.http.get<User[]>(this.getBaseUrlResurce() + "/search")
   }
}
