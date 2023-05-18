import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { Config } from 'src/app/config/config';
import { IUsuario } from 'src/app/core/security/IUsuario';
import { IToken } from './IToken';
import { IUser } from './IUser';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private urlMOCARGO: string;

  constructor(
    private http: HttpClient, 
    private appConfig: Config,
    private jwtHelper: JwtHelperService,
    private router: Router) { 
    this.urlMOCARGO = this.appConfig.getUrlMocargo();
  }

  /**
   * Servicio para iniciar sesion
   * @param user
   * @returns 
   */
  public singIn(user: IUser):Observable<IToken>{
    return this.http.post<IToken>(this.urlMOCARGO + '/api/login/user', user);
  }

  /**
   * Servicio para consultar informacion del usuario
   * @param user
   * @returns 
   */
   public getUserInfo(userName: string):Observable<IUsuario>{
    return this.http.get<IUsuario>(this.urlMOCARGO + '/api/usuario/search?username=' + userName);
  }

  /**
   * Validar si esta autorizado con token
   * @returns
   */
  public isAuth():boolean{
    const token = localStorage.getItem('token');
    if (!localStorage.getItem('token') || !token || this.jwtHelper.isTokenExpired(token)){
      return false;
    }
    return true;
  }

  /**
   * Cerrar sesion y eliminar token
   */
  public logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
