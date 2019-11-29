import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as base from './app/components/index';


import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './root.component';


@NgModule({
    declarations: [RootComponent, base.HeaderComponent],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      CommonModule,
      RootRoutingModule,
    ],
    bootstrap: [RootComponent]
  })
  export class RootModule {}