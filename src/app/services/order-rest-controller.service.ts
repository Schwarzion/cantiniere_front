import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OrderRestControllerService {

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get(`${environment.apiUrl}/order/findall`);
  }
}
