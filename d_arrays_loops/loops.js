/*
* Example 1: Creating a FOr Loop
*/

// For loop to print a value from 1 to 10
const total = 10;

for (let i = 1; i <= total; i++) {
    console.log(i);
}

// What if I wanted to count down instead, from 10 - 1?
// Incorporate a sleep timer of 500 milliseconds for each count

// setTimeOut(callback_function(), duration in milliseconds)

function showGreeting(i){
    if(i === 0)
        console.log("Merry Christmas!")
    else
        console.log(String(i));
}

for (let i = total; i >= 0; i--) {
    setTimeout(() => {                                  /* setTimeOut(callback_function(), duration in milliseconds) */
        showGreeting(i);                                /* The callback function calls function showGreeting(i) */
    }, (total - i) - 500);                              /* 0ms, 500ms, 1000ms, .... */
}

/*
* Example 2: For-Each Loop
*/

const names = ["Rai", "Zal", "Dan"]

names.forEach((guest, key) =>{                          /* forEach loop takes in a value OR value, key as params */
    console.log(key+1 + ". Welcome " + guest);
});

/*
* Example 3: While Loop (check first, do later)
*/
// ! Very useful for the JavaScript assessment

let i = 1;

do {
    console.log(i);
    i++;                                                // incrementor is equivalent i = i + 1;
} while (i<10);

/*
* Example 4: While Loop (Check first, do later)
*/

let countDown = 10

while(countDown >= 1){

    console.log("Counting down " + countDown);

    if(countDown== 1)
        console.log("Merry Christmas!");
    
    countDown--;                                        // decrementor is equivalent to countDown = countDown -1;
}