/*
* Instantiate a new Array Object
*/

const arrCategories = new Array(
    {name:"Cat A", description:"Cars below 1600cc"},
    {name:"Cat B", description:"Cars above 1600cc"},
    {name:"Cat C", description:"Goods Vehicles and Buses"}
);

/* array properties */
console.log(arrCategories.length);                                  /* calling the array's property called length */
console.log(arrCategories[0].name);                                 /* calling the object's name property for the 1st element */

/* array method() */
arrCategories.push({name:"Cat E", description:"Open"});
console.log(arrCategories);

/*
* In JavaScript, constructor functions are USED to create objects
*/

function Person(fName, lName){
    this.firstName = fName;
    this.lastName = lName;
}

Person.prototype.gender = "Male";
Person.prototype.getFullName = function(){
    return this.firstName + " " + this.lastName;
}

const person1 = new Person("John", "Doe");
const person2 = new Person("Steve", "Smith");

console.log(person1.gender);
console.log(person2.gender);

console.log(person1.getFullName());
console.log(person2.getFullName());

/*
* Creating a new class called Bicycle
* We instantiate a new instance of Bicycle class - called smallRedBike
*/

class Bicycle{
    constructor(size, color){
        this.size = size;
        this.color = color;
    }
}

const smallRedBike = new Bicycle("small", "red")
console.log(smallRedBike);