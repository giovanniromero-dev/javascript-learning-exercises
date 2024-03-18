// Operadores lógicos

// Operador lógico AND &&

let valor1 = 12;
let valor2 = 13;
let valor3 = 12;

let resultado = valor2 < valor1 && valor1 === valor3;
console.log(resultado);

// Operador lógico OR ||

let resultado2 = valor2 < valor1 || valor1 === valor3;
console.log(resultado2);

// Operador lógico NOT ! (Negación unaria)

let mayorEdad = false;

mayorEdad = !mayorEdad;
console.log(mayorEdad);

// Operador condicional (Ternario)

// expresiónDeCondición ? valor1 : valor2;

let estado;
let edadParticipante = 14;

estado = edadParticipante >= 18 ? 'adulto.' : 'menor.';

console.log('El participante es ' + estado);