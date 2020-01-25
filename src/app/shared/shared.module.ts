import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as shared from './components/index';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule, MatSnackBarModule } from '@angular/material';
import { ErrorService } from '../services/error.service';
import { ErrorInterceptor } from '../interceptors/error.interceptor';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [...shared.component],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  exports: [
    ...shared.component,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
  ],
  providers: [
    ErrorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
      deps: [ErrorService],
    },
  ],
  entryComponents: [shared.MealListComponent],
})
export class SharedModule {}
