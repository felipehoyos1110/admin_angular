import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate, CanActivateChild {

  constructor(
    private sessionService: SessionService,
    private router: Router
  ){}
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return true
  }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean  {
    // Valida que exista sesion activa para permitir ingresar
    if (!this.sessionService.isAuth()){
      console.log('Token no valido o expirado');
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
  
}
