// Métodos y propiedades para tipos Number

// Clase Math

// Redondeo

let puntuacion = 2.5;

let puntuacionRedondeada = Math.round(puntuacion);
console.log(puntuacionRedondeada);

puntuacion = -2.5;

puntuacionRedondeada = puntuacion < 0 ? Math.round(-puntuacion) * -1 : Math.round(-puntuacion);
console.log(puntuacionRedondeada);

// Redondeo a la baja 

puntuacion = 9.7;

puntuacionRedondeada = Math.floor(puntuacion);
console.log(puntuacionRedondeada);

//Redondeo al alza

puntuacion = 9.3;

puntuacionRedondeada = Math.ceil(puntuacion);
console.log(puntuacionRedondeada);

// Random devolver un numero entre 0 y 0.9999999999

let nombres = ['Juan', 'Sara', 'Carlos', 'Raquel'];

let nombreElegido = nombres[Math.floor(Math.random() * nombres.length)];
console.log(nombreElegido);

// Parseo de string a number

let resultado = '9.7' // Tipo string

let resultadoParseado = parseFloat(resultado); // Convierte a number y mantiene la parte flotante

console.log(resultadoParseado);

let resultadoEnteroParseado = parseInt(resultado); // Convierte a number y mantiene solo la parte entera

console.log(resultadoEnteroParseado);

// Parseo de number a string

let resultado2 = 56.7;

let resultado2ParseadoString = resultado2.toString();+
console.log(typeof(resultado2ParseadoString));

