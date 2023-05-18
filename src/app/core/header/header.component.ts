import { Component, Input, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IUsuario } from '../security/IUsuario';
import { SessionService } from '../security/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  public usuario: IUsuario = {};

  constructor(
    private sessionService: SessionService,
    private jwtHelper: JwtHelperService
  ) { 
  }

  ngOnInit(): void {
    this.userInfo();
  }

  private userInfo(){
    const token = localStorage.getItem('token');
    if (token){
      const tokenDecoded =  this.jwtHelper.decodeToken(token);
      console.log(tokenDecoded);
      this.sessionService.getUserInfo(tokenDecoded['nameid']).subscribe(res=>{
        this.usuario = res;
      }, (error)=>{
        console.log(error);
      }
      );
    }
  }

  public signout(){
    this.sessionService.logOut();
  }

}
