import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { LoginResponse, UserResponse } from '../_models/user';
import { catchError } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  token = ''

  constructor(
    private router: Router,
    private http: HttpClient) {  }

    // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'token': ''
    })
  };

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      alert(error.error.message)
    } else {
      alert(error.statusText + " : " + error.status + " :" + JSON.stringify(error.error))
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  // Cadastra um usuario e retorna o usuario
  userRegister(data): Observable<UserResponse> {
    return this.http
      .post<UserResponse>('http://localhost:3000/user/', data)
      .pipe(
        catchError(this.handleError)
      );
  }

  userUpdate(data):Observable<UserResponse> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
      })
    };
    return this.http
      .put<UserResponse>('http://localhost:3000/user/', data , httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  userDelete(): Observable<UserResponse> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
      })
    };
     return this.http
       .delete<UserResponse>('http://localhost:3000/user/' + localStorage.getItem('user_id'), httpOptions)
       .pipe(
         catchError(this.handleError)
       );
   }
    
  // Pega os dados do usuario logado
   getUser(): Observable<UserResponse> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
      })
    };
     return this.http
       .get<UserResponse>('http://localhost:3000/user/' + localStorage.getItem('user_id'), httpOptions)
       .pipe(
         catchError(this.handleError)
       );
   }
  
}