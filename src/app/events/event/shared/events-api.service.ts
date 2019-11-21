import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { AuthService } from './../../../_services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class EventsApiService {

  TOKEN = ''
 
  URL_API = ''

   HTTP_OPTIONS = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'token': this.TOKEN
    })
  };

  constructor(private http: HttpClient, private authService: AuthService ) {
    if (this.authService.isLoggedIn()){
      this.TOKEN = localStorage.getItem('token')
      this.getAllEvents()
    }
   }
    
  

  getAllEvents(): Observable<any>{
    return this.http.get<any>(this.URL_API, this.HTTP_OPTIONS)
    .pipe(map((data: any) =>{ data
    console.log(data)}))
  }
}
