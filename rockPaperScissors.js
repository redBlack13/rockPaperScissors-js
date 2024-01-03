 console.log("hi");
 
 const options = ["rock", "paper", "scissors"]

 function getComputerChoice() {
   const choice = options[Math.floor(Math.random() * options.length)];
   return choice;
 }
 
 function playRound(playerChoice, computerChoice) { 
   const result = checkWinner(playerChoice, computerChoice);
   if (result == "Tie") { 
      return "its a tie";
   }
    else if (result == "You Win!") { 
      return `You Win! $(playerChoice) beats $(computerChoice)`;
    }
}



function checkWinner(playerChoice, computerChoice) {
   if (playerChoice === computerChoice){
      return "Tie";
   } 
   else if (
   (playerChoice == "rock" && computerChoice == "scissors") ||
   (playerChoice == "paper" && computerChoice == "rock") ||
   (playerChoice == "scissors" && computerChoice == "paper") 
  ){  
   return "You Win!";
   }
  else {
      return "Computer Wins" }
  }