import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs';
// import { Pelicula } from 'src/app/interfaces/pelicula';
import { Pelicula } from 'src/app/classes/Pelicula';
import { ImagenService } from 'src/app/services/imagen.service';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  listaPeliculas: Pelicula[] = [];
  peliculaSeleccionada: Pelicula ;

  constructor(private peliculaService: PeliculaService, private imgService:ImagenService) { 
  
    this.peliculaSeleccionada = new Pelicula(0,'','','',0,'',[]);

  }

  ngOnInit(): void {
    this.peliculaService.traerPeliculas().subscribe( pelis =>{
      
      this.listaPeliculas = pelis;

      this.listaPeliculas.map( p =>{
        this.imgService.descargarArchivo(p.fotoPelicula).subscribe(f =>{
          p.fotoPelicula = f;
        })
      })
      
    })
    
  }

  peliculaDetalle(pelicula:Pelicula){
    this.peliculaSeleccionada = pelicula;
    console.log(this.peliculaSeleccionada,'Busqueda component')
  }



}
