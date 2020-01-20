import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  meals = [];
  menus = [];
  isToggled = false;

  cart;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.getCart();
  }

  getCart() {
    this.cartService.cartSubject.subscribe(cart => this.cart = cart);
    this.cartService.emmitSubject();
  }
  toggleCart() {
    this.isToggled = !this.isToggled;
    console.log('actual cart', this.cart);
  }
}
