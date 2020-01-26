import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MealRestControllerService {

  private URL = `${environment.apiUrl}/meal`;

  constructor(private http: HttpClient) { }

  getWeekMeals(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/menu/findallavailablefortoday`);
  }

  getAllMeals(): Observable<any> {
    return this.http.get(`${this.URL}/findall`);
  }

  getMealById(mealId): Observable<any> {
    return this.http.get(`${this.URL}/find/${mealId}`);
  }

  deleteMeal(mealId) {
    return this.http.delete(`${this.URL}/delete/${mealId}`);
  }


  addMeal(meal) {
    return this.http.put(`${this.URL}/add`, meal);
  }
  
  editMeal(meal) {
    return this.http.patch(`${this.URL}/update/${meal.id}`, meal);
  }
}
