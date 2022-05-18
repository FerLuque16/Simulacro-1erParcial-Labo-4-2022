import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/classes/Pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  @Input() listaDePeliculas:Pelicula[] = [];
  @Output() peliculaSeleccionadaEvent: EventEmitter<Pelicula> = new EventEmitter<Pelicula>();
  constructor() { }

  ngOnInit(): void {
  }

  mostrarDetalle(pelicula:Pelicula){
    this.peliculaSeleccionadaEvent.emit(pelicula);
    console.log('Tabla pelicula')
  }

}
