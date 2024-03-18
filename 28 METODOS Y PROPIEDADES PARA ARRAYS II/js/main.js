// Métodos inmutables (no modifican el valor del array)

let frutas = ['manzanas', 'naranjas', 'kiwis', 'fresas', 'plátanos', 'mandarinas'];

let frutasSeleccionadas = frutas.slice(2, 4) // Extrae elementos desde una posición incluida hasta otra posición excluida

console.log(frutas);
console.log(frutasSeleccionadas);

let hayPomelos = frutas.includes('pomelos'); // Devuelve true o false según exista el elemento o no
console.log(hayPomelos);

let mensaje = frutas.join(' | '); // Une los elementos separados por el string del argumento, por defecto ','
console.log(mensaje);
0
let vehiculosEuropeos = ['SEAT', 'Renault', 'Mercedes Benz'];

let marcasVehiculos = vehiculosEuropeos.concat('Subaru', 'Hyunday');
console.log(vehiculosEuropeos);
console.log(marcasVehiculos);

let vehiculosAsiaticos = ['Toyota', 'Mazda'];
marcasVehiculos = vehiculosEuropeos.concat(vehiculosAsiaticos);
console.log(vehiculosEuropeos);
console.log(vehiculosAsiaticos);