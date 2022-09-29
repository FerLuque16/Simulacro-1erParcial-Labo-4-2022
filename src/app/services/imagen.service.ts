import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {
  url!:Observable<string | null>

  constructor(private storage: AngularFireStorage) {}

  subirArchivo(file : File, filePath: string){
    
    const task = this.storage.upload(filePath, file);
  }

  descargarArchivo(urlImg:string){
    const ref = this.storage.ref(urlImg);
    return this.url = ref.getDownloadURL();
  }
}
