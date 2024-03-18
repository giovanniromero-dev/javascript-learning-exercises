// Tipos compuestos

// Arrays
// let identificador: <tipo-elemento>[]
// let identificador: Array<tipo-elemento>

let fruta: string[];

let vehiculos: Array<string>;

fruta = ['peras', 'manzanas'];

// Tipo any

let id: any= 2876; // Rompe la inferencia de tipos y permitirá cualquiera

id = '06754';

// Tipado de funciones (parámetros y el retorno de la función)

function suma(a: number, b: number):number {
    return a+ b;
}

suma(4,9);

// Tipo void (en funciones que no devuelvan valores)

function setMensaje(mensaje: string): void {
    console.log(mensaje);
    // return mensaje; devolvería error
}

// Tipado genérico en funciones (se define el tipo en la invocación de la función)

function retornoResultado<T> (saludo: T):T {
    return saludo;
}

const a: string = retornoResultado<string> ('Hola');
const b: number = retornoResultado<number> (12);

type _id = string | number;

let referencia: _id;

referencia = 'A16762';
referencia = 12.34;
// referencia = false;

// Tipos de unión complejos

type razasPerro = 'Pastor Alemán' | 'Pastor Belga' | 'Mastín';

let razaToby: razasPerro;
razaToby = 'Pastor Alemán';