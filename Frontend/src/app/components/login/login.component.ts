import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { User } from 'src/app/types/types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup 
  isLoggedIn = false;
  isLoginFailed = false;
  formValue!: User;

  constructor(private authService: AuthService, private route: Router, private tokeStorageService: TokenStorageService) { 
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }

  ngOnInit(): void {

    if(this.tokeStorageService.getToken()){
      this.isLoggedIn = true;
    }
  }



  login(){
    if(this.loginForm.valid){
      
      this.formValue = {
        pk: 0,
        userName: this.loginForm.get("userName")?.value,
        password: this.loginForm.get("password")?.value
      }

      this.authService.login(this.formValue).subscribe(res=>{
        if(res){
       
        }
      },
      error =>{

      })
    }
  }
}
