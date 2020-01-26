import { NgModule } from '@angular/core';
import * as base from './components/index';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';



@NgModule({
  declarations: [AppComponent, base.HomeComponent, ForgotPasswordComponent, RegisterComponent],
  imports: [CommonModule, AppRoutingModule, HttpClientModule, SharedModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
