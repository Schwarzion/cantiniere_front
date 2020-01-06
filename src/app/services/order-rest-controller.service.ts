import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderRestControllerService {

  constructor(private http: HttpClient) { }

  URL = `${environment.apiUrl}/order`;

  getOrders() {
    return this.http.get(`${this.URL}/findall`);
  }

  public addOrderMeal(order): Observable<any> {
    return this.http.put(`${this.URL}/add`, order);
  }
}
