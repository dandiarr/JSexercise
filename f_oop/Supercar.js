// const Car = require("./Car.js");

// Use ES6 approach to import class Car
import Car from "./Car.js";

/* Supercar class is a child class of parent Car class */
class Supercar extends Car{

    // constructor of Supercar calls the parent class (Car)
    // the constructor can also have its own properties
    constructor(make, model, year){
        super(make, model, year);
        this.kilometersDriver = 50              /* override the parent class's property */
        this.warranty;                          /* warranty is a property of supercar */
    }

    // methods are also inherited from the parent class
    drive(distance){
        super.drive(distance);
    }

    getTotalKilometersDriven(){
        super.getTotalKilometersDriven();
    }

    // methods that only belong to the child class (Supercar)
    setWarranty(status){
        this.warranty = status;
    }

    getWarranty(){
        return this.warranty;
    }

    static welcomeMsg(msg){
        console.log(
            "\n***********************************\n" +
            msg
            + "\n***********************************\n"
        );
    }

}

// module.exports = Supercar;

// Using the ES6 approach to export class Supercar
export default Supercar;