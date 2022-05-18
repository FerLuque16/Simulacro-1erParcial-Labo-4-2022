import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/classes/Pelicula';

@Component({
  selector: 'app-peliculas-listado',
  templateUrl: './peliculas-listado.component.html',
  styleUrls: ['./peliculas-listado.component.css']
})
export class PeliculasListadoComponent implements OnInit {

  constructor() { }

  @Input() listaDePeliculas:Pelicula[] = [];
  @Output() peliculaTomadaEvent: EventEmitter<Pelicula> = new EventEmitter();

  ngOnInit(): void {
  }

  peliculaAMostrar(pelicula: Pelicula){
    this.peliculaTomadaEvent.emit(pelicula);
    console.log('Pelicula listado')
  }

}
