import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/servises/auth.service';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) { }

  isAuth() {
    if (this.authService.isLogged()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  canLoad() {
    return this.isAuth();
  }

  canActivate() {
    return this.isAuth();
  }


}
