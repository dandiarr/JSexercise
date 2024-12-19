class Car{
    // constructor holds the properties of the class
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
        this.kilometersDriver = 0
    }

    // methods
    // method to drive the care and update kilometers driven
    drive(distance){
        this.kilometersDriver += distance;
        console.log(                                            /* template string to display the data */
            `This ${this.year} ${this.make} ${this.model} has been driven ${this.kilometersDriver} km.`
        );
    }

    // get the total kilometers driven by the car
    getTotalKilometersDriven(){
        return this.kilometersDriver;
    }

}

// Use module.exports to export the class created in this file
// module.exports = Car;

// Using the ES6 approach to export class Car
export default Car;