/* Answers to the guessing game */
const ans = 10;
const ansString = "ten";

const feeedbackGuess = "Guess the number";
const feedbackQuit = "Press q or Q to quit.";
const feedbackWrong = "Wrong. Guess again.";
const feedbackCorrect = "You are correct!";
const feedbackEmpty = "Your answer is empty. Please try again.";

let userInput = "";

do{

    /* Prompt the user for an input */
    userInput = prompt(feeedbackGuess.concat(" ", feedbackQuit));

    /* Check what the user had entered */
    /* use a strict equality operator to check the answers */
    if(userInput === ans.toString() || userInput === ansString){

        /* Acknowledge the user's answer and end the program (break) */
        alert(feedbackCorrect);
        break;

    }else if(!userInput){

        /* Let the user know if the input is empty */
        alert(feedbackEmpty);

    }else if(userInput.toLowerCase() == "q"){

        /* end the program */
        break;

    }else{

        /* User has put in the wrong input (regardless of whether 'q' is entered or not) */
        alert(feedbackWrong);
    }

}while(userInput.toLowerCase() !== "q")