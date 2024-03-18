//3ª Forma de declarar objetos mediante función constructora


function Jugador (nombreIn, apellidosIn, dorsalIn,golesIn) {
    this.nombre = nombreIn;
    this.apellidos = apellidosIn;
    this.dorsal = dorsalIn;
    this.goles = golesIn;

    this.marcarGol = function () {
        this.goles++;
    }
}

// Podemos instanciar todos los objetos que necesitemos

let jugador3 = new Jugador('Rafael','Varan','08',0);
let jugador4 = new Jugador('Julio','Iglesias','01',0);

jugador3.marcarGol();
console.log(jugador3);