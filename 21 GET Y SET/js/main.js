// Get y Set en JavaScript

class Employee {


    name;
    surname; // Públicas
    #age;   // Privadas
    #departament;
    #dni;

    constructor(nameIn, surnameIn) {
        this.name = nameIn;
        this.surname = surnameIn;
    }

    getAge() {
        return this.#age;
    }

    setAge(age) {
        this.#age = age;
    }

    get dni(){
        return this.#dni;
    }

    set dni(dni){
        this.#dni = dni;
    }

}
    
let employee1 = new Employee('Juan','López');

employee1.dni ='56535242A'; // En la invocación de los métodos get y set se usan como propiedades

console.log(employee1.dni);

