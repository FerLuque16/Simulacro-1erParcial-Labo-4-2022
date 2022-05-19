import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/classes/Actor';
import { Pelicula } from 'src/app/classes/Pelicula';
import { ImagenService } from 'src/app/services/imagen.service';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-peliculas-alta',
  templateUrl: './peliculas-alta.component.html',
  styleUrls: ['./peliculas-alta.component.css']
})
export class PeliculasAltaComponent implements OnInit {

  profileUrl:any;

  pelicula:Pelicula;
  actoresPelicula: Actor[] = [];

  imagenPath:string = '';

  

  peliculaForm:FormGroup;
  archivo!:File;
  constructor(private fb: FormBuilder, private peliculaService: PeliculaService,private imgService: ImagenService, private storage: AngularFireStorage) { 
    this.pelicula = new Pelicula(0,'','','',0,'',[]);

    const ref = this.storage.ref('imagen');
     this.profileUrl = ref.getDownloadURL();


    this.peliculaForm = fb.group({

      nombre:['',[Validators.required,Validators.minLength(2)]],
      genero:['',[Validators.required]],
      fechaDeEstreno:['',[Validators.required]],
      cantidadPublico: ['',[Validators.required, Validators.min(0)]],
      fotoPelicula:['',Validators.required]
    })


  }

  ngOnInit(): void {
  }

  altaPelicula(){

    this.pelicula = {...this.peliculaForm.value, fotoPelicula: this.imagenPath, actores: this.actoresPelicula};
    this.imgService.subirArchivo(this.archivo,this.imagenPath);
    this.peliculaService.guardarPelicula(this.pelicula);

    console.log(this.pelicula)

  }
  cambiarGenero(e:any){
    console.log(e.target.value)
    this.peliculaForm.controls['genero'].setValue(e.target.value);
  }

  verForm(){
    console.log(this.peliculaForm.value)
  }

  // Este metodo sirve para usarlo en el evento change asi ir cambiando su valor a medida que cambia la imagen seleccioanda
  archivoOnChange(event: any){
    const file: File = event.target.files[0];
    this.archivo = file;
    this.imagenPath = event.target.files[0].name.replaceAll(' ','-');
    console.log(this.imagenPath);
  }


  obtenerArchivo(){

  }

  cargarActor(actor: Actor){

    this.actoresPelicula.push(actor);
    console.log(actor)
  }

  quitarActor(actor:Actor){
    this.actoresPelicula = this.actoresPelicula.filter(a =>{
      return a != actor
    })
  }
}
