import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivoComponent } from './component/activo/activo.component';
import { EstadisticaComponent } from './component/estadistica/estadistica.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { LineaComponent } from './component/linea/linea.component';
import { LocacionComponent } from './component/locacion/locacion.component';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'activo', component: ActivoComponent},
  {path:'linea', component: LineaComponent},
  {path:'locacion', component: LocacionComponent},
  {path:'dashboard', component: EstadisticaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
