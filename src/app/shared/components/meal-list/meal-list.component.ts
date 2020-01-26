import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MealRestControllerService } from 'src/app/services/meal-rest-controller.service';
import { getCurrentWeek } from 'src/app/utils/date';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.scss']
})
export class MealListComponent implements OnInit {

  meals = [];

  selectedMeals = [];
  selectedIds = [];

  weekNumber;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public mealListDialog: MatDialogRef<MealListComponent>,
    private mealService: MealRestControllerService
    ) { }

  ngOnInit() {
    this.weekNumber = getCurrentWeek();
    this.getWeeklyMeal();
    this.selectedIds = this.data.mealIds;
    this.selectedMeals = this.data.meals;
  }

  getWeeklyMeal() {
    this.mealService.getMealByWeek(this.weekNumber).subscribe(meals => {
      this.meals = meals;
    });
  }

  addMeal(meal) {
    this.selectedMeals.push(meal);
    this.selectedIds.push(meal.id);
  }

  isSelected(mealId) {
    return this.selectedIds.includes(mealId);
  }

  close(sendMeals?) {
    this.mealListDialog.close(sendMeals && this.selectedMeals);
  }

  removeMeal(meal) {
    const index = this.selectedMeals.findIndex(selectedMeal => selectedMeal === meal);
    this.selectedMeals.splice(index, 1);
    const indexId = this.selectedIds.findIndex(selectedMeal => selectedMeal === meal);
    this.selectedIds.splice(indexId, 1);
  }

}
