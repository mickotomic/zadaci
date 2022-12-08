class Vehicle {
    constructor(brand = "", numberOfWheels = 1, currentSpeed = 0, speedLimit = 0){
        this.brand = brand;
        this.numberOfWheels = numberOfWheels;
        this.currentSpeed = currentSpeed;
        this.speedLimit = speedLimit;
    }

    acelerate(){
        
        this.currentSpeed = Math.floor(Math.random() * (this.currentSpeed + 1));
    }

    status(){
        if (this.currentSpeed > this.speedLimit/2){
            console.log("You are going too fast, be carefull!");
        }else if(this.currentSpeed<=this.speedLimit/2){
            console.log("Thanks for driving safely");
        }
    }

} 

class Car extends Vehicle {
   
    
    constructor (brand, numberOfWheels = 4, currentSpeed, speedLimit, tankCapacity = 55){
        super (brand, numberOfWheels = 4 , currentSpeed, speedLimit)
        this.tankCapacity= tankCapacity;
        this.currentFuelQuantity = Math.floor(Math.random() * (this.tankCapacity + 1));
    }
   
    
    getMissingQuantityFromTank (){
         let fuel =  this.tankCapacity - this.currentFuelQuantity;
         console.log(`You need ${fuel} liters to fill up your tank!`)
    }
}

const zadatak2 = new Car ("Peugeot", 4, 40, 60, 72);
zadatak2.getMissingQuantityFromTank();
console.log(zadatak2.currentFuelQuantity);

