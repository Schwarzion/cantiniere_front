import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { MenuRestControllerService } from 'src/app/services/menu-rest-controller.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { MealListComponent } from 'src/app/shared/components';
import { of } from 'rxjs';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss']
})
export class AddMenuComponent implements OnInit {

  menuId;
  menu;

  isEditing = false;

  weeksNumber = [];
  mealsId: number[] = [];
  meals = [];

  isMealListToggled = false;

  menuForm: FormGroup;

  constructor(private route: ActivatedRoute, private menuService: MenuRestControllerService, public matDialog: MatDialog) { }

  ngOnInit() {
    this.route.url.pipe(
      switchMap(url => {
        if (url.length === 3) {
          this.isEditing = true;
          this.menuId = url[url.length - 1].path;
          return this.menuService.getMenuById(this.menuId);
        }
        return of(false);
      })
    ).subscribe(menu => {
      if (this.isEditing) {
        this.handleMenuAttributions(menu);
      }
      this.initForm();
    });
  }

  handleMenuAttributions(menu) {
    this.menu = menu;
    if (this.menu.availableForWeeks) {
      this.weeksNumber = this.menu.availableForWeeks;
    }
    if (this.menu.meals) {
      for (const meal of this.menu.meals) {
        this.mealsId.push(meal.id);
        this.meals.push(meal);
      }
    }
  }

  initForm() {
    this.menuForm = new FormGroup({
      label: new FormControl((this.menu && this.isEditing) ? this.menu.label : ''),
      description: new FormControl((this.menu && this.isEditing) ? this.menu.description : ''),
      price: new FormControl((this.menu && this.isEditing) ? this.menu.priceDF : ''),
      weekInput: new FormControl(''),
    });
  }

  addWeekNumber() {
    const form = this.menuForm.controls;
    if (!this.weeksNumber.includes(form.weekInput.value)) {
      this.weeksNumber.push(form.weekInput.value);
    }
    form.weekInput.reset();
  }

  removeWeekNumber(weekNumber: number) {
    const index = this.weeksNumber.findIndex(week => week === weekNumber);
    this.weeksNumber.splice(index, 1);
  }

  sendMenu() {
    const formValues = this.menuForm.value;
    const parsedMenu = {
      availableForWeeks: this.weeksNumber,
      description: formValues.description,
      priceDF: formValues.price,
      label: formValues.label,
      mealIds: this.mealsId,
      id: this.menuId
    };

    if (this.isEditing) {
      this.menuService.editMenu(parsedMenu).subscribe(menu => console.log('succes', menu), err => console.dir(err));
    } else {
      this.menuService.addMenu(parsedMenu).subscribe(menu => console.log('succes', menu), err => console.dir(err));
    }
  }

  toggleMealList() {
    this.isMealListToggled = !this.isMealListToggled;
  }

  removeMeal(mealId) {
    const index = this.menu.meals.findIndex(meal => meal.id === mealId);
    this.meals.splice(index, 1);
    this.mealsId.splice(index, 1);
  }

  openMealListModal() {
    const dialogRef =
      this.matDialog.open(MealListComponent, { width: '75%', height: '75%', data: { mealIds: this.mealsId, meals: this.meals } });
    dialogRef.afterClosed().subscribe(selectedMeals => {
      if (selectedMeals) {
        this.meals = selectedMeals;
        for (const meal of this.meals) {
          if (!this.mealsId.includes(meal.id)) {
            this.mealsId.push(meal.id);
          }
        }
      }
    });
  }

}
