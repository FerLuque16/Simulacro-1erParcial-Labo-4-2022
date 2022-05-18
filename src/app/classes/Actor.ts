export class Actor{
    nombre: string;
    apellido: string;
    edad: number;
    paisDeNacimiento:string;

    constructor(nombre:string, apellido:string,edad: number,paisDeNacimiento:string){
        this.nombre = nombre
        this.apellido = apellido;
        this.edad= edad;
        this.paisDeNacimiento = paisDeNacimiento;
    }
}