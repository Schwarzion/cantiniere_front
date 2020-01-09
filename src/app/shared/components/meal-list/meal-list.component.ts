import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MealRestControllerService } from 'src/app/services/meal-rest-controller.service';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.scss']
})
export class MealListComponent implements OnInit {

  meals = [];

  selectedMeals = [];
  selectedIds = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public mealListDialog: MatDialogRef<MealListComponent>,
    private mealService: MealRestControllerService
    ) { }

  ngOnInit() {
    this.getAllMeals();
    // this.selectedMeals = this.data.meals;
    this.data.mealIds = this.selectedIds;
    this.data.mealIds.map(mealId => {
      console.log('meals', this.meals);
      this.meals.map(meal => {
        if (meal.id === mealId) {
          this.selectedMeals.push(meal);
        }
      });
    });
    console.log(this.data.mealIds);
    console.log(this.selectedMeals);

  }

  getAllMeals() {
    this.mealService.getAllMeals().subscribe(meals => {
      this.meals = meals;
    });
  }

  addMeal(meal) {
    console.log('add');
    this.selectedMeals.push(meal);
  }

  isSelected(mealId) {
    console.log('isSelected', mealId);
    this.selectedMeals.forEach(meal => {
      if (meal.id === mealId) {
        console.log('true');
        return true;
      }
    });
    return false;
  }

  removeMeal(meal) {
    console.log('remove');
    const index = this.selectedMeals.findIndex(selectedMeal => selectedMeal === meal);
    this.selectedMeals.splice(index, 1);
  }

}
