// Propiedades privadas en JavaScript

class Employee {

    name;
    surname; // Públicas
    #age; // Privadas
    #departament;

    constructor(nameIn, surnameIn) {
        this.name = nameIn;
        this.surname = surnameIn;
    }

    getAge(){
        return this.#age;
    }

    setAge(age) {
        this.#age = age;
    }
}

let employee1 = new Employee('Juan','López');
// console.log(employee1.#age); errorla propiedad no es accesible

employee1.setAge(44);
console.log(employee1.getAge());