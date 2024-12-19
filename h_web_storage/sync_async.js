console.log("One");

/* create an asynchronous op here, wait for 3s to print the string "Two" */
setTimeout(() => {
    console.log("Two")
}, 3000);

console.log("Three");