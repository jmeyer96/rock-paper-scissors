let humanScore = 0 ; 
let computerScore = 0; 
const humanSelection = getHumanChoice(); 
const computerSelection = getComputerChoice(); 

playRound(humanSelection, computerSelection); 

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
        computerScore++ ;
        console.log("You lose ! Rock beats Scissors."); 
    }
}

