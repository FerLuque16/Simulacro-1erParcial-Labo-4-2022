import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import { Actor } from '../classes/Actor';


@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private itemsCollection!: AngularFirestoreCollection<Actor>;
  items!: Observable<Actor[]>;

  constructor(private firestore: AngularFirestore) { }


  guardarActor(actor:Actor){
    this.firestore.collection('actores').add(actor)
  }

  traerActores():Observable<Actor[]>{
    this.itemsCollection = this.firestore.collection<Actor>('actores');
    return this.itemsCollection.valueChanges();
  }
}
