import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartSubject = new Subject<any>();
  private cart = {
    menus: [],
    meals: []
  };

  constructor() { }

  getCart() {
    console.log('get cart', this.cartSubject);
    this.cartSubject.subscribe(cart => cart.next(this.cart));
  }

  emmitSubject() {
    this.cartSubject.next(this.cart);
  }

  addMeal(meal) {
    this.cart.meals.push(meal);
    this.emmitSubject();
  }

  addMenu(menu) {
    this.cart.menus.push(menu);
  }
}
