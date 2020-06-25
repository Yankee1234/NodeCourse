import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth-service.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService,public router: Router) {}
  canActivate() : boolean{
    if(!this.auth.isAuthenticated()){
      this.router.navigate(['login']);
      return false;
    }
    this.router.navigate(['profile']);
    return true;
}
  // canLoad(): boolean {
  //   if (!this.auth.isAuthenticated()) {
  //     this.router.navigate(["login"]);
  //     return false;
  //   }
  //   return true;
  // }
}
