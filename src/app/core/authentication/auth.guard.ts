import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';



@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      // check if current route is restricted by role
      if (!(route.data.role === currentUser.role)) {
        switch (currentUser.role) {
          case 'Student':
            this.router.navigate(['/student']);
            break;
          case 'Instructor':
            this.router.navigate(['/instructor']);
            break;
          default:
            this.router.navigate(['/admin']);
        }
        return false;
      }


      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
