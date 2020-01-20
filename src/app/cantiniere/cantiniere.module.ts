import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CantiniereRoutingModule } from './cantiniere-routing.module';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';

import * as cantiniere from './components/index';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { IngredientDetailComponent } from './components/ingredient-detail/ingredient-detail.component';
import { ValidateComponent } from './components/validate/validate.component';

@NgModule({
  declarations: [...cantiniere.component, IngredientsComponent, IngredientDetailComponent, ValidateComponent],
  imports: [CommonModule, SharedModule, CantiniereRoutingModule, SharedModule, MatDialogModule],
})
export class CantiniereModule {}
