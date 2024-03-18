// Métodos y propiedades para Arrays

let frutas = ['manzanas', 'naranjas', 'kiwis'];

// Propiedades

console.log(frutas.length); // Número de elementos del array

// Métodos mutables (modificar los valores de la variable)

let frutaExtraida = frutas.pop(); // Extrae el último elemento del array
console.log(frutaExtraida);
console.log(frutas);

frutas.push('albaricoques', 'cerezas'); // Añade uno o varios elementos al final del array
console.log(frutas);

frutas.shift(); // Extraer el primer elemento del array y desplazar a la izquierda el resto
console.log(frutas);

frutas.unshift('plátanos', 'fresas'); // Añade uno o varios elementos al inicio del array desplazando el resto a la derecha
console.log(frutas);


// Método splice para eliminar o sustituir elementos
// splice(indice, cantidad, elementos opcionales a sustituir)

frutas.splice(1, 2);
console.log(frutas);

frutas.splice(1, 1);
console.log(frutas);

frutas.splice(1, 2, 'plátanos', 'fresas');
console.log(frutas);

frutas.splice(1, 1, 'peras');
console.log(frutas);

frutas.splice(2, 0, 'sandías', 'piñas');
console.log(frutas);

frutas.sort();
console.log(frutas);

frutas.reverse();
console.log(frutas);

// Los métodos en JavaScript se pueden encadenar

let marcaVehiculos = ['Dacia', 'VW', 'SEAT', 'Audi', 'Renault'];

marcaVehiculos.sort().reverse();
console.log(marcaVehiculos);