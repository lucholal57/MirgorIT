import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { ActivoComponent } from './component/activos/activo_industrial/activo.component';
import { LocacionComponent } from './component/locacion/locacion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EstadisticaComponent } from './component/estadistica/estadistica.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ActivoStandarComponent } from './component/activos/activo-standar/activo-standar.component';
import { ActivoGeneralComponent } from './component/activos/activo-general/activo-general.component';
import { ActivoCelularComponent } from './component/activos/activo-celular/activo-celular.component';
import { ActivoNotebookComponent } from './component/activos/activo-notebook/activo-notebook.component';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { LineaTelefonicaComponent } from './component/linea-telefonica/linea-telefonica.component';




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ActivoComponent,
    LocacionComponent,
    EstadisticaComponent,
    ActivoStandarComponent,
    ActivoGeneralComponent,
    ActivoCelularComponent,
    ActivoNotebookComponent,
    UsuarioComponent,
    LineaTelefonicaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    TypeaheadModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    NgxChartsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
