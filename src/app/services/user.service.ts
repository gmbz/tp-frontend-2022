import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { JwtResponse } from '../models/jwt-response';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  SERVER: string = 'http://localhost:4000/user';
  userSubject = new BehaviorSubject(false);
  constructor(private httpClient: HttpClient, private router: Router) {}

  // signUp(user: User): Observable<JwtResponse> {
  //   return this.httpClient
  //     .post<JwtResponse>(`${this.SERVER}/create`, user)
  //     .pipe(
  //       tap((res: JwtResponse) => {
  //         if (res) {
  //           // guardar token
  //           this.saveToken(res.token);
  //         }
  //       })
  //     );
  // }

  // signin(user): Observable<JwtResponse> {
  //   return this.httpClient.post<JwtResponse>(`${this.SERVER}/signin`, user).pipe(
  //     tap((res: JwtResponse) => {
  //       if (res) {
  //         // guardar token
  //         this.saveToken(res.token);
  //       }
  //     })
  //   );
  // }

  signIn(user): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(`${this.SERVER}/signin`, user);
  }

  signUp(user): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(`${this.SERVER}/`, user);
  }

  isLogged() {
    return !!localStorage.getItem('x-access-token');
  }

  logout() {
    localStorage.removeItem('x-access-token');
    this.router.navigate(['/']);
  }

  getToken() {
    return localStorage.getItem('x-access-token');
  }

  getUserId() {
    return localStorage.getItem('user-id');
  }
}
