import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/classes/Pelicula';

@Component({
  selector: 'app-actor-lista-peliculas',
  templateUrl: './actor-lista-peliculas.component.html',
  styleUrls: ['./actor-lista-peliculas.component.css']
})
export class ActorListaPeliculasComponent implements OnInit {

  @Input() peliculas:Pelicula[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
