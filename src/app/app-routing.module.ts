import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './core/security/login.guard';
import { SessionGuard } from './core/security/session.guard';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path: '', component: HomeComponent, canActivate: [SessionGuard], children:[
    {
      path: 'admin', 
      loadChildren: ()=>import('./admin/admin.module').then(
        (m)=>m.AdminModule
      ),
      canActivateChild: [SessionGuard]
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
