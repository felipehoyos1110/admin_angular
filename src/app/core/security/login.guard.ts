import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  constructor(
    private sessionService: SessionService,
    private router: Router
  ){}
  
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean  {
    // Si ya hay sesion activa no deja ingresar nuevamente al login
    if (this.sessionService.isAuth()){
      console.log('Token valido');
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
  
}
