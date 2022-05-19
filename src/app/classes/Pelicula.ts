import { Actor } from "./Actor";

export class Pelicula{
    id:number;
    nombre: string;
    genero:string;
    fechaDeEstreno:string;
    cantidadPublico:number;
    fotoPelicula:string;
    actores: Actor[]

    constructor(id:number,nombre: string,genero:string,fechaDeEstreno:string,cantidadPublico:number,fotoPelicula:string, actores:Actor[]){{
        this.id = id;
        this.nombre = nombre;
        this.genero = genero;
        this.fechaDeEstreno = fechaDeEstreno;
        this.cantidadPublico = cantidadPublico;
        this.fotoPelicula = fotoPelicula;
        this.actores = actores;
    }}
}