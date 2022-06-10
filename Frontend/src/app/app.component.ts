import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './services/token-storage.service';
import { Attivita } from './types/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'login';
  isLoggedIn = false;

  username?: string;

  

  
    
  

  constructor(private tokenService: TokenStorageService, private route: Router){
  }
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenService.getToken();

    if(this.isLoggedIn){
      const user = this.tokenService.getUser();

      this.username = user.userName;
    }
  }

  logout(){
    this.tokenService.signOut();
    this.route.navigate(['login']);
  }

  

}
