import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Pelicula } from '../classes/Pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  private itemsCollection!: AngularFirestoreCollection<Pelicula>;
  items!: Observable<Pelicula[]>;

  constructor(private firestore: AngularFirestore) { }

  guardarPelicula(pelicula:Pelicula){
    this.firestore.collection('peliculas').add(pelicula)
  }

  traerPeliculas(): Observable<Pelicula[]>{
    this.itemsCollection = this.firestore.collection<Pelicula>('peliculas');
    return this.itemsCollection.valueChanges();
  }

  // traerActores():Observable<Actor[]>{
  //   this.itemsCollection = this.firestore.collection<Actor>('actores');
  //   return this.itemsCollection.valueChanges();
  // }
}
