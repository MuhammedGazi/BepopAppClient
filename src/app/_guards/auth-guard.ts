import { ActivatedRouteSnapshot, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './../services/auth-service';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  private authService=inject(AuthService);
  private router=inject(Router);

    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):MaybeAsync<GuardResult>{
    if(this.authService.loggedIn()){
      return true;
    }
    console.log("auth guard çalıştı");
    this.router.navigate(["/login"]);
    return false;
  }
}
