import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as shared from './components/index';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [...shared.component],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
  ],
  exports: [...shared.component, ReactiveFormsModule, FormsModule],
  entryComponents: [shared.MealListComponent],
})
export class SharedModule {}
