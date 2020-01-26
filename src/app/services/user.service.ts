import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { throwError as observableThrowError, Observable, Subject } from 'rxjs';
import { of } from 'rxjs';

import { environment } from '../../environments/environment';
import { User } from '../shared/models/User';


const jwt = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userToken: string;
  user: User;
  resp: number;

  URL = `${environment.apiUrl}/user`;

  constructor(private router: Router, private http: HttpClient) {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
      console.log('Token : ' + this.userToken);
    }
  }

  setUserToken(token) {
    this.userToken = token;
    localStorage.setItem('token', token);
  }

  getUserById(): Observable<any> {
    return this.http.get(`${this.URL}/find/` + jwt.decodeToken(this.userToken).user.id, { observe: 'response' });
  }

  getUserProfile(id): Observable<any> {
    return this.http.get(`${this.URL}/find/` + id, { observe: 'response' });
  }

  getUserToken() {
    return this.userToken;
  }

  getUser() {
    if (this.user) {
      return of(this.user);
    }
    return of(null);
  }

  setUser() {
    this.getUserById().subscribe(resp => {
      this.user = resp.body;
    });
  }

  isUserConnected() {
    if (localStorage.getItem('token')) {
      return of(!!localStorage.getItem('token'));
    } else {
      return of(!!this.userToken);
    }
  }

  isLunchLady() {
    if (this.userToken) {
      const decodedToken = jwt.decodeToken(this.userToken);
      return !!decodedToken.user.isLunchLady;
    }
    return false;
  }

  logout() {
    this.userToken = null;
    localStorage.removeItem('token');
  }

  editUser(editData: any, id: number): Observable<any> {
    return this.http.patch(`${this.URL}/update/` + id, editData, { observe: 'response' });
  }

  addUser(newData: any): Observable<any> {
    return this.http.put(`${this.URL}/register`, newData, { observe: 'response' });
  }

  getAllUser() {
    return this.http.get(`${this.URL}/findall`);
  }

  creditUser(userId, amount) {
    return this.http.post(`${this.URL}/credit/${userId}?amount=${amount}`, {});
  }

  deactivateUser(userId: number) {
    return this.http.patch(`${this.URL}/deactivate/${userId}`, {});
  }

  activateUser(userId: number) {
    return this.http.patch(`${this.URL}/activate/${userId}`, {});
  }

  deleteUser(userId: number) {
    return this.http.delete(`${this.URL}/delete/${userId}`, {});
  }

  forgotPassword(email: string) {
    return this.http.post(`${environment.apiUrl}/forgotpassword?email=${email}`, {});
  }
}
