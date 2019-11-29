import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import * as base from './app/components/index';



import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './root.component';


@NgModule({
    declarations: [RootComponent, base.HeaderComponent],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      CommonModule,
      HttpClientModule,
      RootRoutingModule,
    ],
    bootstrap: [RootComponent]
  })
  export class RootModule {}