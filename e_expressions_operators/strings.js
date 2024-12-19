/*
* Example 1: String operations using the + symbol
*/

let s1 = "Greetings ";
let s2 = "Learners";

let output = s1 + s2;                           /* Is s1 or s2 mutated (changed)? */
console.log(output);                            /* output: "Greetings Learners" */

s1+=s2;                                         /* s1 = "Greetings Learners" */
console.log(s1);                                /* output; "Greetings Learners" */

/*
* Example 2: String Methods
*/

let x1;                                         /* Declare variable x */
let x2;                                         /* Declare variable y */
let result;                                     /* Declare variable result and initialise it with an empty string */

x1 = "Greetings";                               /* Assign a value to variable x1 */
x2 = "Learners";                                /* Assign a value to variable x2 */

// ! Setting a string to lowercase
result = x1.toLowerCase();                      /* result = greetings */
console.log(result);

// ! Setting a string to UPPERCASE
result = x1.toUpperCase();                      /* result = GREETINGS */
console.log(result);

// ! Trim spaces within a string
let x3 = " Hello "
console.log("'" + x3.trim() + "'");             /* result = "Hello", other options include trimStart() and trimEnd() */

// ! Convert a value to string
let forbiddenStatus = 403;
let convertedStr = forbiddenStatus.toString();
console.log(forbiddenStatus.toString());
console.log(convertedStr);
console.log(typeof convertedStr);

// ! Splitting a string
let welcomeMsg = "Hello World";
let arr = welcomeMsg.split(" ");                /* welcomeMsg is NOT mutated - a array of the results is returned */
console.log(arr[0]);

let helloCoders = "Hello World JS Coders";
arr = helloCoders.split(" ", 3);                 /* helloCoders is NOT mutated - an array count of 3 of the total elements are returns */
console.log(arr);

// ! Obtain the current day of the week and print a custom message
const currDate = Date.now();                     /* return the milliseconds of today's date calculated from 1 Jan 1970 */
const today = new Date(currDate);
let splitToday = today.toDateString();           /* toDateString() returns a formatted date */
splitToday = splitToday.split(" ", 1);           /* splitToday[0] */

switch (splitToday[0]) {
    case "Mon":
        console.log("Monday Blues!");
        break;
    case "Tue":
    case "Wed":
    case "Thu":
        console.log("Happy Coding Day!");
        break;
    case "Fri":
        console.log("TGIF!");
        break;
    default:
        console.log("Weekend is here!");
        break;
}

// ! Slicing strings
let welcomeMsg2 = "Hello World";
console.log(welcomeMsg2.slice(0, 5));           /* Hello */

// ! Using slicing to capitalise a name
let username = "john doe"
let splitUserName = username.split(" ");

let firstName = splitUserName[0].charAt(0).toUpperCase() + splitUserName[0].slice(1, splitUserName[0].length);
let lastName = splitUserName[1].charAt(0).toUpperCase() + splitUserName[1].slice(1, splitUserName[1].length);
let fullName = firstName + " " + lastName;
console.log(fullName);

// ! Convert S1234567A (e.g. NRIC) to XXXX567A, suitable for display
let ID = "S1234567A";
let displayID = "XXXXX";
displayID += ID.slice(5);                       /* alternatively, use: displayID += ID.slice(-4) */
console.log(displayID);

// ! String Contatenation
let fName = "Willy";
let lName = "Wonka";
let characterName = fName.concat(" ", lName);   /* alternatively; let characterName = fName + " " + lName */
console.log(characterName);

// ! Extracting part of a string - via substring()
let language = "Javascript";
let substr = language.substring(0, 4);          /* extract the string from index 0 to index 3 */
console.log(substr);

let language2 = "Java";
let substr2 = language2.substring(1);           /* extract the string starting from index 1 */
console.log(substr2);