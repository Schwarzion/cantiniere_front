import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders } from '@angular/common/http';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IngredientRestControllerService {

  constructor(private http: HttpClient) { }


  getIngredients(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/ingredient/findall`)
      .pipe(
        tap(data => {
          console.log(data);
        }),
        catchError(this.handleError('getIngredients', []))
      );
  }

  getIngredient(id: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/ingredient/find/${id}`)
      .pipe(
        tap(data => {
          console.log(data);
        }),
        catchError(this.handleError('getIngredient', []))
      );
  }

  addIngredient(newData: any): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/ingredient/add`, newData, { observe: 'response' });
  }

  editIngredient(editData: any, id: number): Observable<any> {
    return this.http.patch<any>(`${environment.apiUrl}/ingredient/update/${id}`, editData, { observe: 'response' });
  }

  deleteIngredient(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/ingredient/delete/${id}`);
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
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