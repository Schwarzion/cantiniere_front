import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { of } from 'rxjs';
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const jwt = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userToken;

  URL = `${environment.apiUrl}/user`;

  constructor(private http: HttpClient) {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
      console.log("Token : "+this.userToken);
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

  getWallet() {

    if (this.userToken) {
      return of(jwt.decodeToken(this.userToken));
    }
    return of(false);
  }

  isUserConnected() {
    if (localStorage.getItem('token')) {
      return of(!!localStorage.getItem('token'));
    } else {
      return of(!!this.userToken);
    }
  }

  logout() {
    this.userToken = null;
    localStorage.removeItem('token');
  }

  editUser(editData: any, id: number): Observable<any> {
    return this.http.patch(`${this.URL}/update/`+ id, editData, { observe: 'response'});
  }

  addUser(newData: any): Observable<any> {
    return this.http.put(`${this.URL}/register`, newData, { observe: 'response'});
  }

  getAllUser() {
    return this.http.get(`${this.URL}/findall`);
  }

  creditUser(userId, amount) {
    return this.http.post(`${this.URL}/credit/${userId}?amount=${amount}`, {});
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return (error);
    };
  }

}
