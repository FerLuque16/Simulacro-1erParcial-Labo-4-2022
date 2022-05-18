import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/classes/Pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  
  constructor() {
    // this.pelicula = new Pelicula(0,'','','',0,'');
   }
  @Input() pelicula!:Pelicula;

  ngOnInit(): void {
  }

}
