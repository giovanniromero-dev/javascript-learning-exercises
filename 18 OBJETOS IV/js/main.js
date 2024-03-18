// 4ª Forma de declarar objetos mediante Factory functions

function Empleado (nombre,apellidos) {
    return {
        nombre,
        apellidos
    }
}

let empleado1 = Empleado('Juan','López Pérez');
console.log(empleado1.nombre);