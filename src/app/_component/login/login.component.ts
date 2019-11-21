import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
 
  constructor(
    private authService: AuthService
  ) {}
 
  ngOnInit() {
    this.authService.logout();
  }
 
  login() {
    this.model.action = 'login';
    this.authService.loginForm(this.model).subscribe(response => {
      console.log(response)
      if (response.token != null) {
        this.authService.setUser(response);
      }
   }, error => {
     console.error(error);
    });
  }

  logout(){
    this.authService.logout()
  }
 
}

