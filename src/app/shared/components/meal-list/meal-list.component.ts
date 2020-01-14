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
    this.selectedIds = this.data.mealIds;
    this.selectedMeals = this.data.meals;
  }

  getAllMeals() {
    this.mealService.getAllMeals().subscribe(meals => {
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
