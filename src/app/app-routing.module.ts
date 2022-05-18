import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorAltaComponent } from './components/actor/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './components/actor/actor-listado/actor-listado.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PeliculasAltaComponent } from './components/peliculas/peliculas-alta/peliculas-alta.component';
import { PeliculasListadoComponent } from './components/peliculas/peliculas-listado/peliculas-listado.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'busqueda',
    pathMatch:'full'

  },
  {
    path:'busqueda',component:BusquedaComponent
  },
  {
    path:'peliculas/alta',
    component:PeliculasAltaComponent
  },
  {
    path:'peliculas/listado',
    component:PeliculasListadoComponent
  },
  {
    path:'actor/alta',
    component:ActorAltaComponent
  },
  {
    path:'actor/listado',
    component:ActorListadoComponent
  },
  {
    path:'actor',
    redirectTo:'actor/alta'
  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
