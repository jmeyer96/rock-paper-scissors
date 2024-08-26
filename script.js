let humanScore = 0 ; 
let computerScore = 0; 

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    if (number === 0) { 
        return "rock"; 
    } else if (number === 1) { 
        return "paper";
    } 
    return "scissors"; 
}

function getHumanChoice() { 
    let choice = prompt("Please enter rock, paper or scissors to play."); 
    if (choice != null || choice != undefined) {
        if (choice.toLowerCase() === "rock" && choice ) { 
            return"rock"; 
        } else if (choice.toLowerCase() === "paper") {
            return "paper"; 
        } else if (choice.toLowerCase() === "scissors") {
            return "scissors";
        } 
    }
    alert("Please enter a valid choice.")
    getHumanChoice(); 
}

function playGame() { 
let humanSelection = getHumanChoice(); 
let computerSelection = getComputerChoice();   
let i = 1; 

while(i < 5){
        playRound(humanSelection, computerSelection); 
        console.log(`Your Score is : ${humanScore} and Computer Score is : ${computerScore} .`);
        humanSelection = getHumanChoice(); 
        computerSelection = getComputerChoice(); 
        i++; 
}

if (i === 5 && humanScore <= computerScore) { 
    console.log("You lose !");
    computerScore++; 
    console.log(`Your Score is : ${humanScore} and Computer Score is : ${computerScore} .`);
    
} else if (i === 5 && humanScore > computerScore) {
    console.log("You win !"); 
    humanScore++; 
    console.log(`Your Score is : ${humanScore} and Computer Score is : ${computerScore} .`); 
} 

function playRound(humanChoice, computerChoice) { 
    if (humanChoice === computerChoice) { 
         console.log("Equality, no one wins !"); 
     } else if (humanChoice === "paper" && computerChoice === "rock") {
         humanScore++; 
         console.log("You Win ! Paper beats Rock."); 
     } else if (humanChoice === "paper" && computerChoice === "scissors") {
         computerScore++; 
         console.log("You Lose ! Scissors beats Paper."); 
     } else if (humanChoice === "rock" && computerChoice === "scissors") { 
         humanScore++; 
         console.log("You Win ! Rock beats Scissors.") 
     }else if(humanChoice === "rock" && computerChoice === "paper") { 
         computerScore++;
         console.log("You Lose ! Paper beats Rock."); 
     } else if (humanChoice === "scissors" && computerChoice === "paper") {
         humanScore++; 
         console.log("You Win ! Scissors beats Paper.")
     } else if (humanChoice === "scissors" && computerChoice === "rock") {
         computerScore++;
         console.log("You lose ! Rock beats Scissors."); 
     }
 }
}

playGame();

