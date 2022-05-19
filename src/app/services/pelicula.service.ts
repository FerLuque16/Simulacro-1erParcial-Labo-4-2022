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
}
