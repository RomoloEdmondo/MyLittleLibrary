import { trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import { User } from '../model/user.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // API Firebase-project
  registerURL= `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebase.apiKey}`
  loginURL= `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebase.apiKey}`

  user: User | undefined
  isLoggedIn= false

  constructor(private http: HttpClient, private router: Router ) { }

  isAuthenticated() {
    return this.isLoggedIn
  }

  createUser(email: string, id: string, token: string, expirationDate: Date, favorite? : string[] ) {
    this.user= new User(email, id, token, expirationDate, favorite)
    this.isLoggedIn = true
  }

  login(email: string, password: string) :Observable<any>  {
    return this.http.post(this.loginURL, {email: email, password: password, returnSecureToken: true});
  }
  register(email: string, password: string ) :Observable<any>   {
    return this.http.post(this.registerURL, {email: email, password: password, returnSecureToken: true})
  }
  logout() {
    this.isLoggedIn = false
    localStorage.removeItem('user')
    this.router.navigate(['/login'])
    // this.user= null
  }
}
