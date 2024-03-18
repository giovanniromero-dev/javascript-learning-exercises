// 2ª Forma de declarar objetos con Object

let jugador2 = new Object();
console.log(typeof jugador2);

jugador2.nombre = 'Lionel';
jugador2.apellidos = 'Messi';
jugador2.dorsal ='10';
jugador2.goles = 0;
jugador2.marcarGol = function() {
    this.goles++;
}

jugador2.marcarGol();
console.log(jugador2);