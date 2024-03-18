// 1ª Forma de declarar objetos mediante literal

let jugador1 = {
    nombre: 'Sergio',
    apellidos: 'Ramos', // propiedades son públicas
    dorsal: '4',
    goles: 0,
    equipos: ['Sevilla','Real Madrid'],
    marcarGol() {
        this.goles++;
    }
}

// Acceso a los miembros (notación del punto)

console.log(jugador1.apellidos);

jugador1.marcarGol();

console.log(jugador1.goles);

jugador1.apellidos = 'Ramos González';

console.log(jugador1.apellidos);

