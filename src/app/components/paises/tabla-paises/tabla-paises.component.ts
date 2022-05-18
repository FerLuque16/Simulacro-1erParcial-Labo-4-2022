import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from 'src/app/interfaces/pais.interface';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  paises:Observable<Pais[]> = this.paisesService.traerPaises();
  
  @Output() paisSeleccionadoEvent: EventEmitter<Pais> = new EventEmitter<Pais>();

  constructor(private paisesService:PaisService) { }

  ngOnInit(): void {

  }
  enviarPais(pais:Pais){
    //Agarrar este pais en el componente alta actor
    this.paisSeleccionadoEvent.emit(pais)
  }

  // @Output() peliculaSeleccionadaEvent: EventEmitter<Pelicula> = new EventEmitter<Pelicula>();
  // constructor() { }

  // ngOnInit(): void {
  // }

  // mostrarDetalle(pelicula:Pelicula){
  //   this.peliculaSeleccionadaEvent.emit(pelicula);
  //   console.log('Tabla pelicula')
  // }

}
