import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { UserRoutingModule } from './user-routing.module';

import * as user from './components/index';

@NgModule({
  declarations: [...user.component],
  imports: [CommonModule, SharedModule, UserRoutingModule],
})
export class UserModule {}
