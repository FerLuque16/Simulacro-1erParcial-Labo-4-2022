import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/classes/Actor';
import { Pais } from 'src/app/interfaces/pais.interface';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  listaDeActores: Actor[] = [];
  actor: Actor;

  actorForm:FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.actor = new Actor('','',0,'');

    this.listaDeActores =[
      {nombre:'Tom', apellido: 'Holland', edad: 25, paisDeNacimiento:'Inglaterra'},
      {nombre:'Tom',apellido:'Hardy',edad: 35, paisDeNacimiento:'Inglaterra'},
      {nombre:'Antonio', apellido:'Banderas',edad:52,paisDeNacimiento:'España'}
    ]


    //Cambiar esto por fbgroup con el formbuilder
    this.actorForm = new FormGroup({
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      edad:new FormControl(0),
      pais: new FormControl('')
    });


  }

  ngOnInit(): void {
    // this.actorForm = new FormGroup({
    //   'nombre': new FormControl(this.actor.nombre,[Validators.required]),
    //   'apellido': new FormControl(this.actor.apellido,[Validators.required]),
    //   'edad': new FormControl(this.actor.edad,[Validators.required,Validators.min(2),Validators.max(99)]),
    //   'pais': new FormControl(this.actor.paisDeNacimiento,[Validators.required])
    // })
  }

  cargarPais(pais:Pais){
    this.actor.paisDeNacimiento = pais.name.common;
  }

  altaActor(){
    console.log(this.actorForm.value);
    // this.listaDeActores.push(this.actor);
    console.log(this.listaDeActores)
    // this.actor = new Actor('','',0,'');
  }
}
