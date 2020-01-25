import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CantiniereRoutingModule } from './cantiniere-routing.module';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';

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
    MatDialogModule
  ],
})
export class CantiniereModule {}
