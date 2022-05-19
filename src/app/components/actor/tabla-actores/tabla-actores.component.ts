import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Actor } from 'src/app/classes/Actor';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-tabla-actores',
  templateUrl: './tabla-actores.component.html',
  styleUrls: ['./tabla-actores.component.css']
})
export class TablaActoresComponent implements OnInit {

  actores:Observable<Actor[]> = this.actorService.traerActores();

  @Output() actorSeleccionadoEvent:EventEmitter<Actor> = new EventEmitter<Actor>();
  constructor(private actorService: ActorService) { }

  ngOnInit(): void {
  }

  enviarActor(actor:Actor){
    this.actorSeleccionadoEvent.emit(actor)
  }

}
