class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log(`Імя: ${this.name}, Вік: ${this.age}`);
    }
}

class Car {
    constructor(brand, model, year, licensePlate, owner) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;
        this.owner = owner;
    }

    assignOwner(owner) {
        if (owner.age >= 18) {
            this.owner = owner;
        } else {
            console.log('Власник повинен бути не менше 18 років.');
        }
    }

    displayInfo() {
        console.log(`Автомобіль: ${this.brand} ${this.model}`);
        console.log(`Рік: ${this.year}, Номерний знак: ${this.licensePlate}`);
        if (this.owner) {
            console.log('Інформація про власника:');
            this.owner.displayInfo();
        } else {
            console.log('Власник не призначений.');
        }
    }
}

const person1 = new Person('Вася', 25);
const person2 = new Person('Петя', 16);

const car1 = new Car('Toyota', 'Corolla', 2020, 'AB123CD', person1);
const car2 = new Car('Honda', 'Civic', 2018, 'XY456Z', person2);

car1.displayInfo();
console.log('------------------------');
car2.displayInfo();