import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../autentication/services/auth.guard';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { GrillaEquiposComponent } from './components/grilla-equipos/grilla-equipos.component';
import { DetalleEquipoComponent } from './components/detalle-equipo/detalle-equipo.component';
import { MapaEquiposComponent } from './components/mapa-equipos/mapa-equipos.component';

import { AuthInterceptorService } from '../autentication/services/auth-interceptor.service';
import { DetalleEquipoModule } from './components/detalle-equipo/detalle-equipo.module';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthenticationGuard]
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    GrillaEquiposComponent,
    DetalleEquipoComponent,
    MapaEquiposComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgbNavModule,
    DetalleEquipoModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
})
export class DashboardModule { }
