import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as base from './app/components/index';

import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './root.component';
import { SharedModule } from '../shared/shared.module';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { LoginComponent } from './app/components/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RootComponent, base.HeaderComponent, LoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RootRoutingModule,
    SharedModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
  ],
  bootstrap: [RootComponent],
  entryComponents: [LoginComponent],
})
export class RootModule {}
