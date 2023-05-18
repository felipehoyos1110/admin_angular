import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../core/security/IUser';
import { SessionService } from '../core/security/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: IUser = { };

  constructor(private sessionService: SessionService,
    private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * Inicio de sesion
   */
  public logIn(){
    this.sessionService.singIn(this.user).subscribe(res=>{
      localStorage.setItem('token', res.token);
      this.router.navigate(['']);
    }, (error)=>{
      console.log(error)
    }
    );
  }
  
}
