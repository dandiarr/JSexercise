/*
* Example 1:
*/
let a = 10;
let b = 20;

a = b;                                  /* b = a */
console.log(a);                         /* a = 20 */

a += b;                                 /* a = a + b */
console.log(a);                         /* 40 */

a -= b;                                 /* a = a - b */
console.log(a);                         /* 20 */

a *= b;                                 /* a = a * b */
console.log(a);                         /* 400 */

a /= b;                                 /* a = a / b */
console.log(a);                         /* 20 */

a %= b;                                 /* a = a % b */
console.log(a);                         /* 0 */

a = 3;
b = 3;

a **= b;                                /* a = a ** b */
console.log(a);                         /* 27 (3 to the power of 3) */

/*
* Example 2: Comparison Operations (true or false)
*/

let x = 5;
console.log(x == 9  )                   /* false */

x = "9"
console.log(x == 9);                    /* true */

console.log(x === 9);                   /* false (because of type checking) */

console.log(x != 9);                    /* false (because of the type, it thinks "9" == 9) */

console.log(x !== 9);                   /* true (indeed, "9" as a string is NOT equal to 9 as a number) */

x = 7;
console.log(x < 9);                     /* true */

x = 9;
console.log(x <= 9);                    /* true */

console.log( x > 9);                    /* false */

console.log(x >= 9);                    /* true */