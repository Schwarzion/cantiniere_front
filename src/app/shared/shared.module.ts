import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as shared from './components/index';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [...shared.component],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  exports: [...shared.component, ReactiveFormsModule, FormsModule],
})
export class SharedModule {}
