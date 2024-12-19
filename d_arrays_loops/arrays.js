/*
* Example 1: Declare an array
*/
const myArray = (1, 2, 3, 4, "Hello", true, null);
console.log(myArray);

const myArray2 = new Array(1, 2, 3, 4, "Hello", true, null);
console.log(myArray2);

/*
* Example 2: Built-in function of the Array Object
*/

// map function
const mappedArray = [1, 2, 3, 4, 5, 6];

const multiplyBy10 = mappedArray.map(item => item * 10);

const multiplyBy10Again = mappedArray.map((item) => {
    const result = item * 10;
    console.log("new result: " + result);
    return result
});

console.log(mappedArray);
console.log(multiplyBy10);
console.log(multiplyBy10Again);

// filter() function

const vowels = ["a", "e", "i", "o"];

const filteredVowels = vowels.filter(item => item === "a" || item === "u");

console.log(filteredVowels);    /* returns the results as an array: ["a"] */
console.log(filteredVowels[0]); /* to extract the value of the returned array */

// ! sort() function

const num = [1, 2, 3, 4, 5];
const names = ["James", "Chris", "Max", "Lenon"]

// sort num by decending order
const descendingNum = num.sort((a, b) => a > b ? -1 : 1);
console.log(descendingNum);

const ascendingNum = descendingNum.sort((a, b) => a > b ? 1 : -1);
console.log(ascendingNum)

const randomNum = [7, 21, 3, 14, 5, 60];
const sortAscendRandomNum = randomNum.sort((a, b) => a > b ? 1 : -1)
console.log(sortAscendRandomNum);

// ! How do you sort randomNum in descending order
const sortDescendRandomNum = randomNum.sort((a, b) => a > b ? -1 : 1)
console.log(sortDescendRandomNum);

// ! re-writing the Tenary operation to an if-else statement
const sortDescendingOpsIfElse = randomNum.sort((a, b) => {
    if(a > b)
        return -1
    else
    return 1;
})
console.log(sortDescendingOpsIfElse);

// ! Sort the names array

// ! Ascending order
const ascendingNames = names.sort((a, b) => a > b ? 1 : -1);
console.log(ascendingNames);

// ! Sort names in Descending order
const descendingNames = names.sort((a, b) => a > b ? -1 : 1);
console.log(descendingNames);

// ! reduce () function

const numbers = [1, 2, 3, 4];
const productOfArr = numbers.reduce((a, b) => a * b);
console.log(productOfArr);

// Can you think of a use case for the reduce function()
const subtotal = [55, 99.99, 49.99];
const total = subtotal.reduce((a, b) => a + b);
console.log("Your total bill is: $" + total.toFixed(2));

// ! push() and pop() function
const alphanumericVal = ["a", "b", "c", "d"];
alphanumericVal.push("e")
console.log(alphanumericVal);
alphanumericVal.pop();
console.log(alphanumericVal);

// ! shift() and unshift() function
const alphanumericVal2 = ["w", "x", "y", "z"];
alphanumericVal2.shift();
console.log(alphanumericVal2);
alphanumericVal2.unshift("w");
console.log(alphanumericVal2);


// ! slice () function - the original array is not affected
const arrNums = [1, 2, 3, 4, 5];

const sliceArr = arrNums.slice(1, 3)             /* .slice(index, count, - 1) */
console.log(sliceArr);                          /* [2,3] the count itself is NOT inclusive */
console.log(arrNums);                           /* arrNum (original array) is still intact */


// ! splice() function - the original array IS mutated
/* [1, (2), 3, 4, 5]; */
const splicedARR = arrNums.splice(1, 2)          /* .splice(index, count - 1) */
console.log(splicedARR);                         /* [2,3] the count is INCLUSIVE */
console.log(arrNums);                            /* arrNums is mutated where 2 elements were removed */

// ! USE THE SPLICE OPERATION ON A SHOPPING CART

const cart = [                                   /* An array of JavaScript Oject */
    {id: 1, name:"Orange Juice"},                /* [0] */
    {id: 2, name: "Paper Towels"},               /* [1] */
    {id: 3, name: "Scotch Tape"}                 /* [2] */
];

const itemToRemove = 5;                         /* index position to remove from the cart */

const index = cart.findIndex(item => item.id ===itemToRemove);
if(index !== -1){                               /* If index !== -1 it means the product is found */
    cart.splice(index, 1);                      /* Lift and remove the item by its index and count of 1 to remove */
    console.log(cart);
}
else{
    console.log("Nothing to delete.")           /* Otherwise, nothing to remove */
}

/*
* Example 3: Working with 2D Arrays
*/

// ! Create constant 2D-Array with pre-determined values

const arr2D = [
    [3, 2, 7],
    [2, 9, 5],
    [5, 1, 5]
];

console.log(arr2D);

const myField = [
    ['░', '░', 'O', '░'],
    ['*', 'O', '░', 'O'],
    ['░', '^', '░', '░'],
   ];

   console.log(myField);

   // Loop through a 2D Array (Nested for Loop)
   const rows = 3;
   const cols = 3;
   const array2D = [];

   for(let i = 0; i < rows; i++) {
    array2D[i] = [];                            /* index i has a new array */

    for (let j = 0; j < cols; j++) {
        array2D[i] [j] = 0;                     /* initialise the each row, column with 0 value */
    }
   }
   console.log(array2D)