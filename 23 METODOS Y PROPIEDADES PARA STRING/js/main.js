// Métodos y propiedades para string en JavaScript

// let nombre = new String('Juan');
let nombre = 'Juan';

console.log(nombre.length); // Devuelve nº caracteres
console.log(nombre.toLowerCase()); // Devolver el valor transformado a mayúscula
console.log(nombre.toUpperCase());

console.log(nombre);

console.log(nombre.charAt(2)); // Devolver el caracter de la posición (indexada a cero)

console.log(nombre.indexOf('n')); // Devuelve la posición de la primera coincidencia
console.log(nombre.indexOf('x')); // Devuelve -1 si no encuentra el caracter

nombre = 'Amanda';

console.log(nombre.lastIndexOf('a')); // Devuelve la posición de la última coincidencia
console.log(nombre.includes('nda')); // Devuelve true o false si encuentra la cadena
console.log(nombre.startsWith('A')); // Devuelve true o false si comienza por el caracter
console.log(nombre.endsWith('z')); // Devuelve true o false si finaliza por el caracter

let apellidos = 'Pérez Gómez';

let nombreCompleto = nombre.concat(' '+apellidos);
console.log(nombreCompleto);

let frase = '               En un lugar de La Mancha   ';

console.log(frase);
console.log(frase.trim()); // Elimina al comienzo y final los espacios en blanco

let password = '01234abcde';

console.log(password.slice(2,5)); // Devuelve desde la primera posición incluida
                                  // hasta la segunda posición excluida

                        
console.log(password.slice(-2)); // Pasando argumento negativo devuelve los n últimos caracteres




