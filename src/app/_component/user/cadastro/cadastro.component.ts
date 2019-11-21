import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  model: any = {};

  constructor(private apiService: ApiService,
              public router: Router) { }

  ngOnInit() {
  }

  cadastro() {
    this.model.action = 'cadastro';
    this.apiService.userRegister(this.model).subscribe(response => {
      if (response.id != null) {
        console.log(response)
        alert("Cadastro Realizado com Sucesso")
        this.router.navigate(['/login']);
      }
   }, error => {
     console.error(error);
    });
  }
}
