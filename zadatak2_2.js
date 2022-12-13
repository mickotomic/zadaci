import {Vehicle} from "./zadatak2_1.js"

class Car extends Vehicle {
   
    
    constructor (brand, numberOfWheels = 4, currentSpeed, speedLimit, tankCapacity = 55){
        super (brand, numberOfWheels = 4 , currentSpeed, speedLimit)
        this.tankCapacity= tankCapacity;
        this.currentFuelQuantity = Math.floor(Math.random() * (this.tankCapacity + 1));
    }
   
    
    getMissingQuantityFromTank (){
         let fuel =  this.tankCapacity - this.currentFuelQuantity;
        console.log(`You need ${fuel} liters to fill up your tank!`);
    }
}

const zadatak2 = new Car ("Peugeot", 4, 40, 60, 72);
zadatak2.getMissingQuantityFromTank();
console.log(zadatak2.currentFuelQuantity);