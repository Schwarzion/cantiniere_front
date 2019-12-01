import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { of } from 'rxjs';

const jwt = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userToken;

  constructor(private http: HttpClient) {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token').user;
    }
  }

  setUserToken(token) {
    this.userToken = token;
    localStorage.setItem('token', token);
  }

  getUserToken() {
    return this.userToken;
  }

  getUser() {
    if (this.userToken) {
      return of(jwt.decodeToken(this.userToken));
    }
    return of(false);
  }

  isUserConnected() {
    if (localStorage.getItem('token')) {
      console.log('localstorage', !!localStorage.getItem('token'));
      return of(!!localStorage.getItem('token'));
    } else {
      console.log('else', !!this.userToken);
      return of(!!this.userToken);
    }
  }

  logout() {
    this.userToken = null;
    localStorage.removeItem('token');
  }
}
