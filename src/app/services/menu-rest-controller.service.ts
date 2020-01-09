import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuRestControllerService {
  private URL = `${environment.apiUrl}/menu`;

  constructor(private http: HttpClient) { }

  getMenuTodayList(): Observable<any> {
    return this.http.get<any>(this.URL + '/findallavailablefortoday').pipe(
        catchError(this.handleError('getMenuList', []))
    );
  }
  getMenuWeekList(): Observable<any> {
    return this.http.get<any>(this.URL + '/findallavailableforweek/1').pipe(
        catchError(this.handleError('getMenuList', []))
    );
  }

  getAllMenus(): Observable<any> {
    return this.http.get(`${this.URL}/findall`);
  }

  deleteMenu(menuId): Observable<any> {
    return this.http.delete(`${this.URL}/delete/${menuId}`);
  }

  editMenu(menu): Observable<any> {
    return this.http.patch(`${this.URL}/update/${menu.id}`, menu);
  }

  getMenuById(id): Observable<any> {
    return this.http.get(`${this.URL}/find/${id}`);
  }

  addMenu(menu): Observable<any> {
    return this.http.put(`${this.URL}/add`, menu);
  }

  private handleError<T> (operation = 'operation', result?: T) {
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
