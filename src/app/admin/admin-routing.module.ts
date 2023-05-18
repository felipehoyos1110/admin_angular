import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerminosCondicionesComponent } from './terminos-condiciones/terminos-condiciones.component';

const routes: Routes = [
  {path:'terminosCondiciones', component:TerminosCondicionesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
