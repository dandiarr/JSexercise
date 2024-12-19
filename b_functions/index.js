/*
*Declatr function that takes in 2 parameters and returns a value
*/
function ftnGreeting(salutation, user){

    let msg = "Welcome " + salutation + " " + user;

    return msg;
}

const result = ftnGreeting("Mr", "Raizal")                       /* calling or invoking function ftnGreeting */
console.log(result);                                             /* log the result returned from calling ftnGreeting */

/*
* Declare a function that takes in one parameter that has a default value to it
*/

function addToCart(quantity = 0){                                /* w/o a default parameter value (0), quantity will be undefined */
    if(quantity == 0){
        console.log("You have not added any items.");
    }else{
        console.log("You have added" + quantity + "item");
    }
}

addToCart();                                                    // calling the function w/o a parameter

/*
* Returning values from a function
*/

function selectedChoice(choice=""){

    if(!choice)                                                 // checks the length of the parameter choice, which is a string
        return;                                                 // if the length == 0, return undefined
    
    return true;                                                // otherwise, return true
}

const resultChoice = selectedChoice("vegetarian");              // value stored in resultChoice

if(resultChoice)                                                // if resultChoice return true
    console.log("Thank you for your selection");                // thank the user
else
    console.log("You did not make a selection");                // inform the user


/*
* Declare an Arrow function
*/

let ftnGreetingV2 = (salutation, user) => {
    let msg = "Hello " + salutation + " " + user;
    return msg;
}

console.log(ftnGreetingV2("Mr", "Raizal"));

/* 
How an anonymous function looks like */

(function(){

    console.log("This is any anonymous function");

})();

(() => {

    console.log("This is also an anonymous function");
})();