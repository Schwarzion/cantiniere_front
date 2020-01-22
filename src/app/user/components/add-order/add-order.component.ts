import { Component, OnInit } from '@angular/core';
import { MealRestControllerService } from 'src/app/services/meal-rest-controller.service';
import { UserService } from 'src/app/services/user.service';
import { OrderRestControllerService } from 'src/app/services/order-rest-controller.service';
import { CartService } from 'src/app/services/cart.service';
import { MealListComponent } from 'src/app/shared/components';
import { MatDialog } from '@angular/material';


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
  hasSubmitted;
  selectedMenu;

  constructor(
    private mealService: MealRestControllerService,
    private userService: UserService,
    private cartService: CartService,
    public matDialog: MatDialog
  ) { }

  ngOnInit() {
    this.getAvailableMeals();
    this.getUserId();
  }

  validate() {
    this.isLoading = true;

    const order = {
      constraintId: -1,
      menuId: this.selectedMealId,
      quantityMeals: this.mealsQuantity,
      userId: this.userId
    };

    const orderDetails = {
      order,
      details: this.selectedMenu
    };

    this.cartService.addMenu(orderDetails);
    this.hasSubmitted = true;
  }

  addMenu(menu) {
    if (menu.id !== this.selectedMealId) {
      this.mealsQuantity = [];
      this.selectedMealId = menu.id;
      this.selectedMenu = menu;
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
    this.userService.getUserById().subscribe(res => {
      this.userId = res.body.id;
    });
  }

  openMealListModal() {
    const dialogRef =
      this.matDialog.open(MealListComponent, { width: '75%', height: '75%', data: { mealIds: [], meals: [] } });
    dialogRef.afterClosed().subscribe(selectedMeals => {
      if (selectedMeals) {
        for (const meal of selectedMeals) {
            this.cartService.addMeal(meal);
          }
        }
      });
  }
}
