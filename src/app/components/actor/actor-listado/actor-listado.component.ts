import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/classes/Actor';
import { Pelicula } from 'src/app/classes/Pelicula';
import { Pais } from 'src/app/interfaces/pais.interface';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {



  @Input() actores: Actor[] = [];
  @Input() peliculas: Pelicula[] = [];

  @Output() actorPeliculasEvent: EventEmitter<Pelicula[]> = new EventEmitter<Pelicula[]>();
  @Output() actorPaisEvent: EventEmitter<Pais> = new EventEmitter<Pais>();
  @Output() actorDetalleEvent: EventEmitter<Actor> = new EventEmitter<Actor>();
  constructor(private actorService:ActorService) { }

  ngOnInit(): void {
  }

  mostrarPeliculasActor(actor: Actor){
    const peliculasAEnviar = this.peliculas.filter(p => p.actores.some(a => a.nombre == actor.nombre && a.apellido == actor.apellido ))

    console.log(peliculasAEnviar)

    this.actorPeliculasEvent.emit(peliculasAEnviar)
     
  }
  mostrarPaisActor(actor: Actor){
    this.actorPaisEvent.emit(actor.pais);
  }
  mostrarDetalleActor(actor: Actor){
    this.actorDetalleEvent.emit(actor)
  }

}
