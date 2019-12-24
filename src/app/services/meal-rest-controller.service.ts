import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MealRestControllerService {

  constructor(private http: HttpClient) { }

  getWeekMeals(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/menu/findallavailablefortoday`);
  }
}
