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

  constructor() {
    if (this.getLocalStorageCart()) {
      this.cart = this.getLocalStorageCart()
    }
  }

  getCart() {
    this.cartSubject.subscribe(cart => cart.next(this.cart));
  }

  setCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getLocalStorageCart() {
    return JSON.parse(localStorage.getItem('cart'));
  }

  emitSubject() {
    this.cartSubject.next(this.cart);
  }

  addMeal(meal) {
    this.cart.meals.push(meal);
    this.setCartToLocalStorage();
    this.emitSubject();
  }

  addMenu(menu) {
    this.cart.menus.push(menu);
    this.setCartToLocalStorage();
    this.emitSubject();
  }

  discardCart() {
    this.cart = {
      menus: [],
      meals: []
    };
    localStorage.removeItem('cart');
    this.emitSubject();
  }

}
