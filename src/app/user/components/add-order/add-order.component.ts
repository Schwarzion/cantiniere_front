import { Component, OnInit } from '@angular/core';
import { MealRestControllerService } from 'src/app/services/meal-rest-controller.service';
import { UserService } from 'src/app/services/user.service';
import { OrderRestControllerService } from 'src/app/services/order-rest-controller.service';


@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss'],
})
export class AddOrderComponent implements OnInit {
  menusAvailable: any[];
  selectedMealId: number;
  mealsQuantity: any[];
  userId: number;
  isLoading = false;
  hasFailed;

  constructor(
    private mealService: MealRestControllerService,
    private userService: UserService,
    private orderService: OrderRestControllerService
  ) { }

  ngOnInit() {
    this.getAvailableMeals();
    this.getUserId();
  }

  validate() {
    this.isLoading = true;
    this.hasFailed = undefined;

    const order = {
      constraintId: -1,
      menuId: this.selectedMealId,
      quantityMeals: this.mealsQuantity,
      userId: this.userId
    };

    this.orderService.addOrderMeal(order).subscribe(
      () => {
        this.isLoading = false;
        this.hasFailed = false;
      },
      err => {
        console.dir(err);
        this.isLoading = false;
        this.hasFailed = err.error.exceptionMessage;
      });
  }

  addMenu(menu) {
    if (menu.id !== this.selectedMealId) {
      this.mealsQuantity = [];
      this.selectedMealId = menu.id;
      for (const meal of menu.meals) {
        this.mealsQuantity.push({mealId: meal.id, quantity: 1});
      }
    }
  }

  getAvailableMeals() {
    this.mealService.getWeekMeals().subscribe(menus => {
      this.menusAvailable = menus;
    });
  }

  getUserId() {
    this.userService.getUser().subscribe(res => this.userId = res.user.id);
  }
}
