/*
* Example 1: Logical AND(&&) Operation
*/

let x = 10;
let y = 10;

console.log(x < 10 && y < 1);           /* false && false returns false */

x = 9;
y = 1;
console.log(x < 10 && y < 1);           /* true && false returns false */

x = 9;
y = -1;
console.log(x < 10 && y < 1);           /* true && true returns true */

/*
* Example 2: Logical OR (||) Operation
*/

x = 0;
y = 1;
console.log(x === 1 || y === 1);        /* false || true returns true */

x = 1;
y = 0;
console.log(x === 1 || y === 1);        /* true || false returns true */

x = 1;
y = 1;
console.log(x === 1 || y === 1);        /* true || true returns true */

x = 0;
y = 0;
console.log(x === 1 || y === 1);        /* false || false returns false */

/*
* Example 3: Logical Not(!) Operation 
*/

x = 10;
y = 20;
console.log(!(x === y))                    /* !(x === y) returns true */