// Return undefined data type
function greeting(name){            //  function takes in a parameter called "name"

    if(!name)                       //  if name received as a parameter is invalid
        return;                     //  exit the functionn and return (an undefined data type is returned)
    
        return "Hello" + name;      // otherwise, return a greeting with the passed-in name
}

console.log(greeting());            // call the function greeting without passing any name, result printed will be undefined

console.log(greeting("John Doe"));  // call the function greeting with a name passed in

// Working with null datatype
function getDiscount(payment){      // function that process the parameter payment passed in

if(!payment)                            // if payment passed in is not valid
    return null;                    // return a null datatype as a response

if(payment < 20)                        // if payment is < $20, we return a 20% discount 
    return 20;
else
    return 25;                      // otherwise, for all other instances we return 25% discount

}

let discount = getDiscount();       // no discount passed in
let discount20 = getDiscount(19);   // 19 dollar payment, return a 20% discount
let discount25 = getDiscount(50);   // 50 dollar payment, return a 25% discount

if(discount === null)               // the if condition attempts to detect a return data type of null
    console.log("Invalid price given");

if(discount20 === 20){              // the if condition attempts to detect a return value of 20
    console.log("20% discount given")
}

if(discount25 === 25){              // the if condition attempts to detect a return value of 25
    console.log("25% discount given")
}