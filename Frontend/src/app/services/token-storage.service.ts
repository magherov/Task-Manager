import { Injectable } from '@angular/core';


const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() 
  {

  }

  signOut(){
    window.sessionStorage.clear();
  }

  public getToken(): string | null{
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  saveToken(token: string){
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  getUser(){
    const user = window.sessionStorage.getItem(USER_KEY);
    if(user){
      return JSON.parse(user);
    }

    return{}
  }

  
}
