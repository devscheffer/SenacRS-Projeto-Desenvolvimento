import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class LoginGuard implements CanActivate{

    constructor(
        private loginService: LoginService,
        private router: Router
        ){}

    canActivate(
        route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

            if(this.loginService.isLogged()) {
                this.router.navigate(['home'])
                return false;
            }
            return true;
    }

}
