/* Answers to the guessing game */
const ans = 10;
const ansString = "ten";

/* Prompt the user for an input */
let userInput = prompt("Guess the number 0 - 10. Press q or Q to quit.");

while(userInput.toLowerCase() !== "q"){

    /* Check what the user had entered */
    /* use a strict equality operator to check the answers */
    if(userInput === ans.toString() || userInput === ansString){

        /* Acknowledge the user's answer and end the program (break) */
        alert("You are correct!");
        break;

    }else if(!userInput){

        userInput = prompt("Your answer is empty. Please try again.")

    }else{
        
        userInput = prompt("Wrong. Guess again. Press q or Q to quit.")
    }
}