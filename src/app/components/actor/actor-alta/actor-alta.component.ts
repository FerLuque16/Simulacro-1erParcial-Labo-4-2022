import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/classes/Actor';
import { Pais } from 'src/app/interfaces/pais.interface';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  listaDeActores: Actor[] = [];
  actor: Actor;

  pais1:Pais = {
    name:{
      common:'United Kingdom'
    },
    flags:{
      svg:'https://flagcdn.com/gb.svg'
    },
    correcto:true
  }

  pais2:Pais = {
    name:{
      common:'España'
    },
    flags:{
      svg:'https://flagcdn.com/es.svg'
    },
    correcto:true
  }

  actorForm:FormGroup;

  constructor(private fb: FormBuilder, private actorService: ActorService) { 
    this.actor = new Actor('','',0);

    this.listaDeActores =[
      {nombre:'Tom', apellido: 'Holland', edad: 25, pais:this.pais1},
      {nombre:'Tom',apellido:'Hardy',edad: 35, pais:this.pais1},
      {nombre:'Antonio', apellido:'Banderas',edad:52, pais:this.pais2}
    ]


    //Cambiar esto por fbgroup con el formbuilder
    // this.actorForm = new FormGroup({
    //   nombre: new FormControl(''),
    //   apellido: new FormControl(''),
    //   edad:new FormControl(0),
    //   pais: new FormControl('')
    // });

    this.actorForm = fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido:['',[Validators.required, Validators.minLength(3)]],
      edad:[0,[Validators.required, Validators.min(2), Validators.max(99)]],
      pais:['',Validators.required]
    })


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
    this.actor.pais = pais;
    this.pais1 = pais;
    this.actorForm.controls['pais'].patchValue(pais.name.common);
  }

  altaActor(){
    console.log(this.actorForm.value);
    this.actor = {...this.actorForm.value, pais: this.pais1};
    console.log(this.actor)
    // this.listaDeActores.push(this.actor);

    this.actorService.guardarActor(this.actor);
    console.log(this.listaDeActores)
    // this.actor = new Actor('','',0,'');
  }
}
