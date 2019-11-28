import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CantiniereRoutingModule } from './cantiniere-routing.module';

import * as cantiniere from './components/index';

@NgModule({
  declarations: [...cantiniere.component],
  imports: [
    CommonModule,
    SharedModule,
    CantiniereRoutingModule,
  ]
})
export class CantiniereModule { }
