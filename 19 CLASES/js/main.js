// Declaración de clases (ECMA6)

class Vehicle {

    constructor(brandIn, modelIn, colorIn, priceIn) {
        this.brand = brandIn;
        this.model = modelIn;
        this.color = colorIn;
        this.price = priceIn;
    }

    getColor() {
        return this.color;
    }

    setColor(colorIn) {
        this.color = colorIn;
    }

    getPriceWithTaxes(tax) {
        return this.price + this.price * tax;
    }
}

// Instancia de objetos de una clase

let vehicle1 = new Vehicle('Renault','Megane','Gris',16000);
console.log(vehicle1);

console.log(vehicle1.getPriceWithTaxes(0.21));