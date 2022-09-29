import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Actor } from 'src/app/classes/Actor';
import { Pelicula } from 'src/app/classes/Pelicula';
import { Pais } from 'src/app/interfaces/pais.interface';
import { ActorService } from 'src/app/services/actor.service';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent implements OnInit {

  actores:Actor[] = [];
  peliculas:Pelicula[] = [];

  actorSeleccionado:Actor;
  peliculasSeleccionadas:Pelicula[] = [];
  paisSeleccionado!:Pais;

  constructor(private actorService: ActorService,private peliculaService: PeliculaService) {
    this.actorSeleccionado = new Actor('','',0);   
  }

  
  ngOnInit(): void {
    this.actorService.traerActores().subscribe( acts =>{
      this.actores = acts;
    })
    this.peliculaService.traerPeliculas().subscribe( pelis =>{
      this.peliculas = pelis
    })
  }

  mostrarActorDetalle(actor:Actor){
    this.actorSeleccionado = actor;
  }

  mostrarPaisDetalle(pais:Pais){
    this.paisSeleccionado = pais;
  }

  mostrarPeliculasActor(peliculas:Pelicula[]){
    this.peliculasSeleccionadas = peliculas;
  }



}
