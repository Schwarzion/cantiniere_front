import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private userService: UserService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        console.log('intercepted');
        const currentUser = this.userService.getUserToken();
        console.log('currentUser', currentUser);
        if (currentUser && currentUser.length > 1) {
          console.log('if ok');
          request = request.clone({
              setHeaders: {
                  Authorization: `Bearer ${currentUser}`
              }
          });
        }

        return next.handle(request);
    }
}