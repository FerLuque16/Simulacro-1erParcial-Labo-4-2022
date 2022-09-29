import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorAltaComponent } from './components/actor/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './components/actor/actor-listado/actor-listado.component';
import { PeliculasListadoComponent } from './components/peliculas/peliculas-listado/peliculas-listado.component';
import { PeliculasAltaComponent } from './components/peliculas/peliculas-alta/peliculas-alta.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { TablaPeliculaComponent } from './components/peliculas/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './components/peliculas/detalle-pelicula/detalle-pelicula.component';
import { TablaPaisesComponent } from './components/paises/tabla-paises/tabla-paises.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { TablaActoresComponent } from './components/actor/tabla-actores/tabla-actores.component';
import { ActorPeliculaComponent } from './components/actor/actor-pelicula/actor-pelicula.component';
import { ActorListaPeliculasComponent } from './components/actor/actor-lista-peliculas/actor-lista-peliculas.component';
import { ActorDetallePaisComponent } from './components/actor/actor-detalle-pais/actor-detalle-pais.component';
import { ActorDetalleComponent } from './components/actor/actor-detalle/actor-detalle.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistroComponent } from './components/auth/registro/registro.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';



@NgModule({
  declarations: [
    AppComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculasListadoComponent,
    PeliculasAltaComponent,
    BusquedaComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    TablaPaisesComponent,
    NavbarComponent,
    TablaActoresComponent,
    ActorPeliculaComponent,
    ActorListaPeliculasComponent,
    ActorDetallePaisComponent,
    ActorDetalleComponent,
    LoginComponent,
    RegistroComponent,
    BienvenidaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
