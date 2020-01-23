import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(public snackBar: MatSnackBar) {}

  reportAPIError(message: string) {
    this.snackBar.open(message, '', { duration: 10000 });
  }

  reportUnknownError(code: number) {
    this.snackBar.open(`Une erreur est survenue (${code})`, '', { duration: 10000 });
  }
}
