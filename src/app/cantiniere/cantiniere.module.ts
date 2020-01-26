import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CantiniereRoutingModule } from './cantiniere-routing.module';

import * as cantiniere from './components/index';
import { containers } from './containers/index';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [...cantiniere.component, ...containers],
  imports: [
    CommonModule,
    SharedModule,
    CantiniereRoutingModule,
    SharedModule,
    RouterModule,
  ],
})
export class CantiniereModule {}
