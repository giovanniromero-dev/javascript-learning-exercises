// Ámbito de las variables y constantes (dependiendo de su forma de declaración)

// Variables declaradas con var
// el ámbito será el de la función más próxima

var apellidos = 'Lopez Pérez'; // ámbito global
var apellidos = 'Fernández'; // Podemos (aunque sea mala práctica) redeclarar

function setMayorEdad(edad) {
    if(edad >= 18) {
        var adulto = true;
    } else {
        var adulto = false;
    }
    console.log(adulto);
}

setMayorEdad(33);

// variables declaradas con let ó constantes con const
// el ámbito es el blque más próximo de ña variable

let ciudad = 'Barcelona'; // ámbito global
//let ciudad = 'Bogotá'; No podemos redeclarar (error)

function setPuntuacion(puntuacion) {
    if(puntuacion >= 5) {
        let apto = true;
        console.log(apto);
    } else {
        let apto = false;
        console.log(apto);
    }
    // console.log(apto); devolverá error porque apto tiene el ámbito de su bloque;
}

setPuntuacion(7);

// Variables declaradas sin palabra reservada (mala práctica)
// el ámbito será siempre global con idependencia de donde se declaren

function areaTriangulo (a, b) {
    area = .5 * a * b;
}

areaTriangulo(10, 20);

console.log(area); // NO devolverá error porque la variable es global