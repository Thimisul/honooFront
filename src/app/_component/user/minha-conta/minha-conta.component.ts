import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.component.html',
  styleUrls: ['./minha-conta.component.css']
})
export class MinhaContaComponent implements OnInit {
  router: any;

  constructor(public Apiservice: ApiService,
              public login: LoginComponent) { }

  model: any = {};

  ngOnInit() {
    this.getUser()
  }

  getUser(){ 
    this.Apiservice.getUser().subscribe(response => {
        this.model = response
        alert("Bem Vindo! " + response.username)
        
    })
  }

  updateUser(){
    this.model.action = 'update';
    this.Apiservice.userUpdate(this.model).subscribe(response => {
      console.log(response)
      
   }, error => {
     console.error(error);
    });
  }

  deleteUser(){
    this.Apiservice.userDelete().subscribe(response => {
      alert(JSON.stringify(response));
      this.login.logout()
      
    })
  }
}
