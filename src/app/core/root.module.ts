import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './root.component';


@NgModule({
    declarations: [RootComponent],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      CommonModule,
      RootRoutingModule,
      HttpClientModule,
    ],
    bootstrap: [RootComponent]
  })
  export class RootModule {}