// Sintaxis de constructor breve para clases

class Player {
    constructor(public nombre: string, public apellidos: string, private goles:number) {

    }

    setGoles(goles:number):void {
        this.goles = goles;
    }

    getGoles(): number {
        return this.goles;
    }
}

// Interfaces

interface DatosMaestros {
    nombre: string;
    cif: string;
}

class Proveedor implements DatosMaestros{
    nombre: string;
    cif: string;
    formaPago: string;

    constructor(nombre: string, cif:string) {
        this.nombre = nombre;
        this.cif = cif;
    }
}