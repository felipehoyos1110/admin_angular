import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IUsuario } from './core/security/IUsuario';
import { SessionService } from './core/security/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public usuario: IUsuario = {};

  constructor() { }

  ngOnInit(): void {
    
  }
}
