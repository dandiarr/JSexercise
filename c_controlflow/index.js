/*
* Writing an if condition
*/

let number = 10;                                            // declare and initialise variable number with a value of 10

if(number > 5)                                              // if number > 5 = true
    console.log("The number is greater than 5")             // print the log statement

    /*
    * if - else if - else condition
    */

    let temperature = 10;

    if(temperature > 30)                                    // if temperature is greater than 30 
        console.log("It is a hot day!");                    // print "It is a hot day!"
    else if(temperature >20)                                // if temperature is greater than 20
        console.log("It is a warm day!");                   // print "It is a warm day!"
    else if(temperature >10)                                // if temperature is greater than 10
        console.log("Is is a cool day!")                    // print "It is a cool day!"
    else                                                    // otherwise, anything else IS below or equal 10
    console.log("It is a cold day");                        // print "It is a cold day"

    /*
    * switch-case statement
    */

    let expression = "case2"                                // variable expression is know as the criterion to meet

    switch (expression) {                                   // what will be the result printed? - "case2"
        case "case1":
            // code block 1
            console.log("Code block 1 executed");
            break;
        case "case2":                                       // expression fulfils this case
            // code block 2
            console.log("Code block 2 executed");           // therefore, code block 2 will be run
            break;
        case "case3":
            // code block 3
            console.log("Code block 3 executed");
            break
        default:
            // default code block                           // this default statement is a catch-all block
            console.log("Default code executed");
            break;
    }

    /*
    * converting the if - else if - else code block using switch-case
    */

    // reuse the variable temperature

    switch (true) {
        case temperature > 30:
            console.log("It is a hot day!");            
            break;
        case temperature > 20:
            console.log("It is a warm day!");            
            break;
        case temperature > 10:
            console.log("It is a cool day!");            
            break; 
        default:
            console.log("It is a cold day");
            break;
    }

    /*
    * Logical AND (&&&) Operation
    */

    let x = 5;
    let y = 10;
    console.log(x > 0 && y > 0);                            // true && true == true (Both conditions MUST be met)
    console.log(x > 0 && y < 0);                            // true && false == false
    console.log(x < 0 && y > 0);                            // false && true == false
    console.log(x < 0 && y < 0);                            // false && false == false


/*
* Logical OR (||) Operation
*/

let a = 5;
let b = 10;

console.log(a > 0 || b > 0);                                // true || true = true
console.log(a > 0 || b< 0);                                 // true || false = true
console.log(a < 0 || b > 0);                                // false || true = true
console.log(a < 0 || b < 0);                                // false || false = false

/*
* Logistical NOT (!) Operation
*/

let yes = true;
let no = false;

console.log(!yes);                                          // false
console.log(!no);                                           // true


/*
* Comparison Operations
*/

let j = 10;
let k = 20;

console.log("**************************************************************")
console.log(j > k);                                         // 10 < 20 true
console.log(j < k);                                         // 10 > 20 false
console.log(j <= k);                                        // 10 <= 20 true
console.log(j >= k);                                        // 10 >= 20 false
console.log(j == k);                                        // 10 == 20 false
console.log(j === k);                                       // 10 === 20 false (checking again the value AND the type)
console.log(j != k);                                        // 10 != 20 true
console.log(j !== k);                                       // 10 !== 20 true

const c = "10";
const d = 10;

console.log(c == d);                                        // true
console.log(c === d);                                       // false (checking against the value AND the type itself)


