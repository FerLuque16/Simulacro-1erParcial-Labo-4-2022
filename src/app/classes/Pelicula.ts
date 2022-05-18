export class Pelicula{
    id:number;
    nombre: string;
    tipo:string;
    fechaDeEstreno:string;
    cantidadPublico:number;
    fotoPelicula:string;

    constructor(id:number,nombre: string,tipo:string,fechaDeEstreno:string,cantidadPublico:number,fotoPelicula:string){{
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaDeEstreno = fechaDeEstreno;
        this.cantidadPublico = cantidadPublico;
        this.fotoPelicula = fotoPelicula;
    }}
}