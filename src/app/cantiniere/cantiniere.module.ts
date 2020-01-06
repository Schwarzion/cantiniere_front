import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CantiniereRoutingModule } from './cantiniere-routing.module';

import * as cantiniere from './components/index';
import { IngredientsComponent } from './components/ingredients/ingredients.component';

@NgModule({
  declarations: [...cantiniere.component, IngredientsComponent],
  imports: [CommonModule, SharedModule, CantiniereRoutingModule, SharedModule],
})
export class CantiniereModule {}
