import { Pais } from "../interfaces/pais.interface";

export class Actor{
    nombre: string;
    apellido: string;
    edad: number;
    pais?:Pais;

    constructor(nombre:string, apellido:string,edad: number,pais?: Pais){
        this.nombre = nombre
        this.apellido = apellido;
        this.edad= edad;
        this.pais = pais;
    }
}