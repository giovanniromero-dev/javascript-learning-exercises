// Clases en TypeScript (Implementar el tipo de los miembros y modificadores de acceso)

class Jugador {
    public nombre: string;
    public apellidos: string;
    private goles: number;

    constructor(nombre:string, apellidos: string) {
        this.nombre = nombre;
        this.apellidos = apellidos;
    }

    setGoles(goles: number): void {
        this.goles = goles;
    }

    getGoles(): number {
        return this.goles;
    }

}

let jugador1 = new Jugador('Lionel','Messi');

let jugadores: Array<Jugador>;
// jugadores = [jugador1,{nombre: 'Sergio',apellidos: 'Ramos'}]; Error

jugador1.nombre= 'Leo';
// jugador1.goles =10;