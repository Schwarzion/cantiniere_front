import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IngredientRestControllerService {
  private URL = `${environment.apiUrl}/ingredient`;
  constructor(private http: HttpClient) { }

  getAllIngredients(): Observable<any> {
    return this.http.get(`${this.URL}/findall`);
  }
}
