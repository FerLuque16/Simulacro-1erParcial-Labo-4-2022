import { Component, Input, OnInit } from '@angular/core';
import { Pais } from 'src/app/interfaces/pais.interface';

@Component({
  selector: 'app-actor-detalle-pais',
  templateUrl: './actor-detalle-pais.component.html',
  styleUrls: ['./actor-detalle-pais.component.css']
})
export class ActorDetallePaisComponent implements OnInit {

  @Input() pais!:Pais;
  constructor() { }

  ngOnInit(): void {
  }

}
