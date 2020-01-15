import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { isJWTRequired } from '../utils/interceptor';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private userService: UserService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const currentUser = this.userService.getUserToken();
        if ((currentUser && currentUser.length > 1) && isJWTRequired(request.url)) {
            request = request.clone({
              setHeaders: {
                  Authorization: `Bearer ${currentUser}`
              }
          });
        }

        return next.handle(request);
    }
}
