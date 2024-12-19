const prompt = require('prompt-sync')({sigint: true});

// Constant Game Elements
const HAT = '^';
const HOLE = '0';
const GRASS = '░';
const PLAYER = '*';

// Constant Game Scenarios (Messages)
const WIN = "Congratulations! You win!";                            /* WIN */
const LOSE = "You Lose!";                                           /* LOSE */
const OUT_BOUND = "You are out of the field.";                      /* OUT OF BOUNDS */
const INTO_HOLE = "You fell into a hole.";                          /* FALLEN INTO HOLE */
const WELCOME = "Welcome to Find Your Hat game";                    /* START OF GAME WELCOME MESSAGE */
const DIRECTION = "Which direction: up(u), down(d), left(l) or right(r)?"
const QUIT = "Press q or Q to quit the game.";                      /* KEYBOARD TO QUIT THE GAME */
const ENDGAME = "Game Ended. Thank you.";                           /* ENDED THE GAME */
const NOT_RECOGNISED = "Input not recognised.";                     /* INPUT NOT RECOGNISED */

class Field {

    // constructor
    constructor(rows, cols){
        this.rows = rows;                                           /* property to set up the number of rows for the field */
        this.cols = cols;                                           /* property to set up the number of cols for the field */
        this.field = new Array([]);                                 /* property that represents the field for the game */
        this.gamePlay = false                                       /* property to setup the game play */ 
        this.playerPosition = { x: 0, y: 0 };                       /* property to store player's position */
        this.hatPosition = {};                                      /* property to store hat's position */
        this.holes = [];                                            /* property to store hole's position */
    }

    // methods

    // welcome msg
    static welcomeMsg(msg){
        console.log(
            "\n***********************************\n" +
            msg
            + "\n***********************************\n"
        );
    }
    
    // TODO RANDOMISE THE FIELD WITH HAT, HOLE AND GRASS
    // ? TODO THE NUMBER OF HOLES CREATED SHOULD PROVIDE SUFFICIENT CHALLENGE FOR THE GAME
    // ? TODO THE HOLES SHOULD NOT BLOCK THE PLAYER FROM MOVING AT THE START OF THE GAME
    // Generate the game's field
    generateField(){
        for (let i = 0; i < this.rows; i++) {

            this.field[i] = new Array();                            /* Generate field rows */
            
            for (let j = 0; j < this.cols; j++) {
                
                this.field[i][j] = GRASS;                           /* Generate field cols */
            }         
        }
        
        // Place the hat at a random position
        this.hatPosition = {

            hatRow: Math.floor(Math.random() * this.rows),          /* Generate random rows for hat */
            hatCol: Math.floor(Math.random() * this.cols)           /* Generate random cols for hat */
        };

        this.field[this.hatPosition.hatRow][this.hatPosition.hatCol] = HAT;

        // Place the holes at a random position
        let numOfHoles = Math.floor((this.rows * this.cols) / 4);   /* Generate approx 25% of the field */
        
        for (let i = 0; i < numOfHoles; i++) {
            
            let holeRow, holeCol;
            
            do {
                holeRow = Math.floor(Math.random() * this.rows);    /* Generate random rows for holes */
                holeCol = Math.floor(Math.random() * this.cols);    /* Generate random cols for holes */
            } while ((holeRow === holeCol) || (holeRow === this.hatPosition.hatRow && holeCol === this.hatPosition.hatCol));
            
            this.field[holeRow][holeCol] = HOLE;
            this.holes.push({ x: holeRow, y: holeCol });
        }
    }

    // Print out the game field
    printField(){
        this.field.forEach((row) => {
            console.log(row.map(cell => {
                if (cell === HAT || cell === HOLE) {                /* GRASS will hide the HAT or HOLES */
                    return GRASS;
                }
                return cell;
            }).join(""));
        });
    }

    // Start game
    startGame(){                                                    /* Start the game */
        this.gamePlay = true;
        this.generateField(this.rows, this.cols);                   /* Generate the field first */
        this.field[0][0] = PLAYER;                                  /* Set the start position of the character */
        this.printField();                                          /* Print the field once */
        this.updategame();                                          /* Update the game once */
    }

    // Update game
    updategame(){                                                   /* Update the game */
        
        // Obtain user input
        let userInput = "";
        
        // get the user's direction
        do {
            console.log(DIRECTION.concat(" ", QUIT));               /* Request for user's input */
            userInput = prompt();                                   /* Get the user's input */

            switch (userInput.toLowerCase()) {                      /* Update the position of the player */
                case "u":
                case "d":
                case "l":
                case "r":
                    this.updatePlayer(userInput.toLowerCase());
                    break;
                case 'q':
                    this.endGame();                                 /* user has quit the game */
                    break;
                default:
                    console.log(NOT_RECOGNISED)                     /* input not recognized */
                    break;
            }
            
            this.printField();                                      /* Print field */

        } while (userInput.toLowerCase() !== "q" && this.gamePlay); /* Continue to loop if the player hasn't quit and the game is still active */
    }

    // End game
    endGame(){
        console.log(ENDGAME);                                       /* Inform the user the game has ended */
        this.gamePlay = false;                                      /* Set gamePlay to false */
        process.exit();                                             /* Quit the program */
    }

    // !! TODO FOR THE ASSESSMENT
    // Update the player's movement and game condition
    updatePlayer(position){
    
        let x = this.playerPosition.x;
        let y = this.playerPosition.y;

        switch(position) {
            case "u":
                x--;
                break;
            case "d":
                x++;
                break;
            case "l":
                y--;
                break;
            case "r":
                y++;
                break;
        }

        // TODO THEN check if the player has gotten out of bounds  - if yes (LOSE) and endGame()
        // Check if position is out of bounds
        if (x < 0 || x >= this.rows || y < 0 || y >= this.cols) {
            console.log(OUT_BOUND);
            this.endGame();                                         /* If player is out of bounds, end game */
            return;
        }

        // TODO THEN check if the player has fallen into hole - if yes (LOSE) and endGame()
        // Check if position is a hole
        if (this.field[x][y] === HOLE) {
            console.log(INTO_HOLE);
            this.endGame();                                         /* if player fell in hole, end game */
            return;
        }

        // TODO FIRST update the player's position in the field
        // Update the player position in the field
        this.field[this.playerPosition.x][this.playerPosition.y] = GRASS;
        this.playerPosition = { x: x, y: y };
        this.field[this.playerPosition.x][this.playerPosition.y] = PLAYER;

        // TODO THEN check if the player has found the hat - if yes (WIN) and endGame()
        // Check if hat is found
        if (this.playerPosition.x === this.hatPosition.hatRow && this.playerPosition.y === this.hatPosition.hatCol) {
            console.log(WIN);
            this.endGame();
            return;
        }
    }
}

// Static method to welcome the player
Field.welcomeMsg(WELCOME)

const ROWS = 10;
const COLS = 10;
const field = new Field(ROWS, COLS);                                /* Declaring and creating an instance of Field class */
field.startGame();                                                  /* Start the game */