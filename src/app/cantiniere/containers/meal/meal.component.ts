import { Component, OnInit } from '@angular/core';
import { MealRestControllerService } from 'src/app/services/meal-rest-controller.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {
  meals = [];

  constructor(private mealService: MealRestControllerService) { }

  ngOnInit() {
    this.getAllMeals();
    console.log(this.meals);
  }

  getAllMeals() {
    this.mealService.getAllMeals().subscribe(meals => this.meals = meals);
  }

  deleteMeal(mealId) {
    console.log('mneuId', mealId);
    this.mealService.deleteMeal(mealId).subscribe(res => {
      console.log(res);
      this.meals = this.meals.filter(meal => meal.id !== mealId);
    });
  }

}
