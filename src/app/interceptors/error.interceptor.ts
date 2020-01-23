import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorService } from '../services/error.service';

export class ErrorInterceptor implements HttpInterceptor {
  constructor(private errService: ErrorService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse, caught) => {
        if (err.status === 400 && err.error && err.error !== undefined) {
          console.log(`API error ${err.error.code}: ${err.error.message}`);
          this.errService.reportAPIError(err.error.message);
        } else {
          console.log(err);
          console.log(caught);
          this.errService.reportUnknownError(err.status);
        }

        return throwError(err);
      })
    );
  }
}
