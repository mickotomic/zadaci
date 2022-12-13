export class Vehicle {
  constructor(
    brand = "",
    numberOfWheels = 1,
    currentSpeed = 0,
    speedLimit = 0
  ) {
    this.brand = brand;
    this.numberOfWheels = numberOfWheels;
    this.currentSpeed = currentSpeed;
    this.speedLimit = speedLimit;
  }

  acelerate() {
    this.currentSpeed = Math.floor(Math.random() * (this.currentSpeed + 1));
  }

  status() {
    if (this.currentSpeed > this.speedLimit / 2) {
      console.log("You are going too fast, be carefull!");
    } else if (this.currentSpeed <= this.speedLimit / 2) {
      console.log("Thanks for driving safely");
    }
  }
}
