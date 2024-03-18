// Métodos y propiedades para Fechas

//Date

// Obtener la fecha actual

let fechaActual = new Date();
console.log(fechaActual);

// Establecer fechas en JavaScript
// 1ª Opción pasándo argumentos: año, mes (indexado a cero), día, hora, minutos, segundos, ms

let fechaNacimiento = new Date(1990, 1, 11) // 11 de Febrero de 1990
console.log(fechaNacimiento);

// 2ª Opción pasándo argumento fecha-string 'yyyy-MM-dd' (meses no indexados a cero)

let fechaExpedicion = new Date('2021-03-15'); // 15 de Marzo de 2021
console.log(fechaExpedicion);

// 3ª Opcióń pasándo argumento en milisegundos desde era Epoch

let fechaAleatoria = new Date(1554665433353);
console.log(fechaAleatoria);

// Métodos de instancias de Date

console.log(fechaActual.getFullYear()); // Devolver el año en tipo number
console.log(fechaActual.getMonth()); // Devolver el mes en tipo number (indexado a cero)

let meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
];

console.log(meses[fechaActual.getMonth()]);

console.log(fechaActual.getDate()); // Devuelve el día del mes
console.log(fechaActual.getDay()); // Devuelve el día de la semana
console.log(fechaActual.getHours()); // Devuelve la hora
console.log(fechaActual.getMinutes()); // Devuelve los minutos
console.log(fechaActual.getSeconds()); // Devuelve los segundos
console.log(fechaActual.getMilliseconds()); // Devuelve los milisegundos

// Para el calculo de fechas utilizamos los milisegundos

console.log(fechaActual.getTime());

let fechaSalida = new Date(fechaActual.getTime() + 3 * 24 * 60 * 60 * 1000); // Dentro de 3 días
console.log(fechaSalida);