// Métodos y propiedades para arrays de objetos

let jugadores = [
    { nombre: 'Maria', apellidos: 'Zuil', puntuacion: 4.6 },
    { nombre: 'Juan', apellidos: 'Gómez', puntuacion: 7 },
    { nombre: 'Laura', apellidos: 'López', puntuacion: 9.6 }
];

// Ciclo forEach ECMA 2015

let jugadoresAptos = [];

jugadores.forEach((elem) => {
    if (elem.puntuacion >= 5) {
        jugadoresAptos.push(elem);
    }
});

console.log(jugadoresAptos);

// Ciclo map ECMA 2015

let nombreJugadores = jugadores.map((elem, i) => {
    return `${i + 1}.-${elem.nombre} ${elem.apellidos}.`;
})

console.log(nombreJugadores);

// Ciclo filter ECMA 2015

let jugadoresNoAptos = jugadores.filter(elem => {
    return elem.puntuacion < 5;
});

console.log(jugadoresNoAptos);