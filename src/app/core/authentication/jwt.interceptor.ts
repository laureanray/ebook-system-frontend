import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
      });
    }

    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        this.router.navigate(['/']);
        // Removes the stored user data in localstorage
        this.authenticationService.logout();
      }
      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
