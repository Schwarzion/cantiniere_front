import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { MealRestControllerService } from 'src/app/services/meal-rest-controller.service';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { IngredientListComponent } from 'src/app/shared/components';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.scss']
})
export class AddMealComponent implements OnInit {
  mealId;
  meal;

  isEditing = false;
  weeksNumber = [];
  ingredientsId = [];
  ingredients = [];

  mealForm: FormGroup;

  isIngredientListToggled = false;

  constructor(private route: ActivatedRoute, private mealService: MealRestControllerService, public matDialog: MatDialog) { }

  ngOnInit() {
    this.initComponent();
  }

  initComponent() {
    this.route.url.pipe(
      switchMap(url => {
        if (url.length === 3) {
          this.isEditing = true;
          this.mealId = url[url.length - 1].path;
          return this.mealService.getMealById(this.mealId);
        }
        return of(false);
      })
    ).subscribe(menu => {
      if (this.isEditing) {
        this.handleMealAttributions(menu);
      }
      this.initForm();
    });
  }

  initForm() {
    this.mealForm = new FormGroup({
      label: new FormControl((this.meal && this.isEditing) ? this.meal.label : ''),
      description: new FormControl((this.meal && this.isEditing) ? this.meal.description : ''),
      price: new FormControl((this.meal && this.isEditing) ? this.meal.priceDF : ''),
      weekInput: new FormControl(''),
    });
  }

  handleMealAttributions(meal) {
    this.meal = meal;
    if (this.meal.availableForWeeks) {
      this.weeksNumber = this.meal.availableForWeeks;
    }
    if (this.meal.ingredients) {
      for (const ingredient of this.meal.ingredients) {
        this.ingredientsId.push(ingredient.id);
        this.ingredients.push(ingredient);
      }
    }
  }

  addWeekNumber() {
    const form = this.mealForm.controls;
    if (!this.weeksNumber.includes(form.weekInput.value)) {
      this.weeksNumber.push(form.weekInput.value);
    }
    form.weekInput.reset();
  }

  removeWeekNumber(weekNumber: number) {
    const index = this.weeksNumber.findIndex(week => week === weekNumber);
    this.weeksNumber.splice(index, 1);
  }

  openIngredientListModal() {
    const dialogParams = {
      width: '75%',
      height: '75%',
      data: {
        ingredientIds: this.ingredientsId,
        ingredients: this.ingredients
      }
    };
    const dialogRef =
    this.matDialog.open(IngredientListComponent, dialogParams);
    dialogRef.afterClosed().subscribe(selectedIngredients => {
      if (selectedIngredients) {
        this.ingredients = selectedIngredients;
        for (const ingredient of this.ingredients) {
          if (!this.ingredientsId.includes(ingredient.id)) {
            this.ingredientsId.push(ingredient.id);
          }
        }
      }
    });
  }

  sendMeal() {
    const formValues = this.mealForm.value;
    const parsedMeal = {
      availableForWeeks: this.weeksNumber,
      description: formValues.description,
      priceDF: formValues.price,
      label: formValues.label,
      ingredientsId: this.ingredientsId,
      id: this.mealId
    };
    if (this.isEditing) {
      this.mealService.editMeal(parsedMeal).subscribe(meal => console.log('succes', meal), err => console.dir(err));
    } else {
      this.mealService.addMeal(parsedMeal).subscribe(meal => console.log('succes', meal), err => console.dir(err));
    }
  }

}
