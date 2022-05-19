import { Component, OnInit } from '@angular/core';
// import { Pelicula } from 'src/app/interfaces/pelicula';
import { Pelicula } from 'src/app/classes/Pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  listaPeliculas: Pelicula[] = [];
  peliculaSeleccionada: Pelicula ;

  constructor(private peliculaService: PeliculaService) { 

    // this.listaPeliculas = [
    //   {id:1,nombre:'Titanic',tipo:'Amor',fechaDeEstreno:'24/04/2022',cantidadPublico:10000,fotoPelicula:'img',actores:[]},
    //   {id:2,nombre:'Dr Strange',tipo:'Accion',fechaDeEstreno:'05/05/2022',cantidadPublico:10000,fotoPelicula:'img',actores:[]},
    //   {id:3,nombre:'Avengers',tipo:'Otros',fechaDeEstreno:'24/04/2022',cantidadPublico:10000,fotoPelicula:'img',actores:[]}      
    // ]

    
    this.peliculaSeleccionada = new Pelicula(0,'','','',0,'',[]);

  }

  ngOnInit(): void {
    this.peliculaService.traerPeliculas().subscribe( pelis =>{
      this.listaPeliculas = pelis;
    })

  }

  peliculaDetalle(pelicula:Pelicula){
    this.peliculaSeleccionada = pelicula;
    console.log(this.peliculaSeleccionada,'Busqueda component')
  }



}
