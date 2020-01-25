import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { OrderRestControllerService } from 'src/app/services/order-rest-controller.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  meals = [];
  menus = [];
  isToggled = false;
  userId;

  cart;

  constructor(private cartService: CartService, private orderService: OrderRestControllerService, private userService: UserService) {}

  ngOnInit() {
    this.getCart();
  }

  getCart() {
    this.cartService.cartSubject.subscribe(cart => this.cart = cart);
    this.cartService.emitSubject();
  }

  getUserId() {
    this.userService.getUser().subscribe(user => user ? this.userId = user.id : '');
  }

  toggleCart() {
    this.isToggled = !this.isToggled;
    console.log('actual cart', this.cart);
  }

  getTotalPrice() {
    return Math.round(this.getPrice(this.cart.menus) + this.getPrice(this.cart.meals));
  }

  getPrice(type: any[]) {
    let total = 0;
    for (const item of type) {
      if (item.details && item.details.priceDF) {
        total += item.details.priceDF;
      }
      if (item.priceDF) {
        total += item.priceDF;
      }
    }
    return total;
  }

  sendMenus() {
    if (this.cart.menus.length >= 1) {
      for (let i = 0; i < this.cart.menus.length; i++) {
        this.orderService.addOrderMeal(this.cart.menus[i].order).subscribe(res => {console.log('res', res)});
      }
    }
  }

  // TODO: rassembler tout les meals pour en faire qu'une seule commande

  sendMeals() {
    const order = {
      constraintId: -1,
      quantityMeals: [],
      userId: 1
    };
    if (this.cart.meals.length >=1) {
      for (const meal of this.cart.meals) {
        order.quantityMeals.push({
          mealId: meal.id,
          quantity: 1
        });
      }
      this.orderService.addOrderMeal(order).subscribe(res => res.status);
    }
  }

  pay() {
    this.sendMeals();
    this.sendMenus();
    this.cartService.discardCart();
    this.cartService.emitSubject();
  }
}
