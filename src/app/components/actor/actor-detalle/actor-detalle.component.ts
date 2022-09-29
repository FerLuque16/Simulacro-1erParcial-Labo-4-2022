import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/classes/Actor';

@Component({
  selector: 'app-actor-detalle',
  templateUrl: './actor-detalle.component.html',
  styleUrls: ['./actor-detalle.component.css']
})
export class ActorDetalleComponent implements OnInit {

  @Input() actor!:Actor;
  constructor() { }

  ngOnInit(): void {
  }

}
