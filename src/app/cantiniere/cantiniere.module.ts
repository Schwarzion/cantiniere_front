import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CantiniereRoutingModule } from './cantiniere-routing.module';

import * as cantiniere from './components/index';
import { containers } from './containers/index';
import { UserResultComponent } from './components/user-result/user-result.component';

@NgModule({
  declarations: [...cantiniere.component, ...containers, UserResultComponent],
  imports: [CommonModule, SharedModule, CantiniereRoutingModule, SharedModule],
})
export class CantiniereModule {}
