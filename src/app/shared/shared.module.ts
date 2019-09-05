import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as shared from './components/index';



@NgModule({
  declarations: [...shared.component],
  imports: [
    CommonModule
  ],
  exports: [...shared.component]
})
export class SharedModule { }
