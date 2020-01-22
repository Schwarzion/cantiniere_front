import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { getTodayDate } from '../utils/date';


@Injectable({
  providedIn: 'root'
})
export class OrderRestControllerService {

  constructor(private http: HttpClient) { }

  URL = `${environment.apiUrl}/order`;

  getOrders(): Observable<any> {
    return this.http.get(`${this.URL}/findallbetweendateinstatus?status=0&beginDate=&endDate=`);
  }

  getOrdersByDate(start, end): Observable<any> {
    return this.http.get(`${this.URL}/findallbetweendateinstatus?beginDate=${start}&endDate=${end}&status=0`);
  }

  public addOrderMeal(order): Observable<any> {
    return this.http.put(`${this.URL}/add`, order);
  }

  validateOrder(id: number): Observable<any> {
    return this.http.patch(`${this.URL}/deliverandpay/${id}/1`, {});
  }

  cancelOrder(id: number): Observable<any> {
    return this.http.patch(`${this.URL}/cancel/${id}`, {});
  }

  getDayOrderForUser(userId: number): Observable<any> {
    return this.http.get(`${this.URL}/findallforusertoday/${userId}`, {});
  }
  getCreatedOderByDateForUser(start, end, userId: number): Observable<any> {
    return this.http.get(`${this.URL}/findallforuser/${userId}?beginDate=${start}&endDate=${end}&status=0`, {});
  }

  getDeliveredOderByDateForUser(start, end, userId: number): Observable<any> {
    return this.http.get(`${this.URL}/findallforuser/${userId}?beginDate=${start}&endDate=${end}&status=0`, {});
  }
  getCanceledOderByDateForUser(start, end, userId: number): Observable<any> {
    return this.http.get(`${this.URL}/findallforuser/${userId}?beginDate=${start}&endDate=${end}&status=0`, {});
  }

}
