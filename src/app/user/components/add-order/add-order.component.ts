import { Component, OnInit } from '@angular/core';
import { MealRestControllerService } from 'src/app/services/meal-rest-controller.service';


@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss'],
})
export class AddOrderComponent implements OnInit {
  mealsAvailable: any[];
  selectedMealId: number;

  constructor(private mealService: MealRestControllerService) { }

  ngOnInit() {
    this.getAvailableMeals();
  }

  validate() {
    console.log(this.selectedMealId);
    const defaultOrder = {
      constraintId: -1,
      
    }
  }

  selectMeal(id) {
    console.log('selected', id);
    this.selectedMealId = id;
  }

  getAvailableMeals() {
    this.mealService.getWeekMeals().subscribe(meals => {
      this.mealsAvailable = meals;
    });
  }
}
