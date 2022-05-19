import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  constructor(private storage: AngularFireStorage) {}

  subirArchivo(file : File, filePath: string){
    
    const task = this.storage.upload(filePath, file);
  }

  descargarArchivo(){
    
  }
}
