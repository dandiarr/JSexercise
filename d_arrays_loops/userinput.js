const prompt = require("prompt-sync")({sigint: true});

let input = null;

do{
    input = prompt("Please enter your name: ");
} while(input === null || input === "");
