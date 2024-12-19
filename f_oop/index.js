// Use require to import the file that we created
// const Car = require("./Car.js");
// const Supercar = require("./Superca.js");

// ES6 approach to iport Car and Supercar
import Car from "./Car.js"
import Supercar from "./Supercar.js"

// myCar is an object (an instance of Car class)
let myCar = new Car("Toyota", "Raize", 2022);

console.log(myCar);

myCar.drive(100);

myCar.drive(100);

console.log(myCar.getTotalKilometersDriven());

// welcomeMsg is a static method
// static methods do not have to be instantiated to be used
Supercar.welcomeMsg("Welcome to the Supercar form page.");

// mySupercar is an object (an instance of Supercar class)
// Supercar is the child class of Car (parent)
const mySupercar = new Supercar("Maserati", "MC20", 2020)

mySupercar.setWarranty(false);

mySupercar.drive(200);

console.log(mySupercar);