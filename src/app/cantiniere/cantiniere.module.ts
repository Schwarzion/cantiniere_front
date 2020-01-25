import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CantiniereRoutingModule } from './cantiniere-routing.module';

import * as cantiniere from './components/index';
import { containers } from './containers/index';
import { RouterModule } from '@angular/router';
import { ManageMealsComponent } from './components/manage-meals/manage-meals.component';
import { AddMealComponent } from './components/add-meal/add-meal.component';

@NgModule({
  declarations: [...cantiniere.component, ...containers, ManageMealsComponent, AddMealComponent],
  imports: [
    CommonModule,
    SharedModule,
    CantiniereRoutingModule,
    SharedModule,
    RouterModule,
  ],
})
export class CantiniereModule {}
