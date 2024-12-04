
function getComputerChoice (){
    const randNum = Math.floor(Math.random() * 3);
        if (randNum === 0) {
            return "rock";            
        } else if (randNum === 1) {
            return "paper";
        } else {
            return "scissors";
        }
}


function getHumanChoice() {
    let input = prompt("Rock, paper, scissors!");
    if  (input.toLowerCase() === "rock" ||
         input.toLowerCase() === "paper" ||
         input.toLowerCase() === "scissors"){
         return input;
    } else {
        alert("You can choose only Rock, Paper, or Scissors!");
        return getHumanChoice();
    }

}
   
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    function setNextRound() {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
     }



      function playRound(humanChoice, computerChoice){
        humanChoice.toLowerCase();
        if (humanChoice === computerChoice) {
            console.log("Draw - same choices")
    
        } else if (humanChoice === "rock" && computerChoice === "scissors"){
            humanScore++;
            console.log("You win! - Rock beats Scissors");
            
    
        } else if (humanChoice === "rock" && computerChoice === "paper"){
            computerScore++;
            console.log("You loose! - Rock gets wrapped by paper");
    
    
        } else if (humanChoice === "paper" && computerChoice === "rock"){
            humanScore++;
            console.log("You win!- Paper wraps Rock");
    
        } else if (humanChoice === "paper" && computerChoice === "scissors"){
            computerScore++;
            console.log("You loose! - Paper gets cut by Scissors");
    
        } else if (humanChoice === "scissors" && computerChoice === "paper"){
            humanScore++;
            console.log("You win!- Scissors cut Paper");
    
        } else if (humanChoice === "scissors" && computerChoice === "rock"){
            computerScore++;
            console.log("You loose! - Scissors get beaten by Rock");
            

        } else return console.log("Wrong input!");   
    
  
    
    }
    playRound(humanSelection, computerSelection);
    setNextRound();
    playRound(humanSelection, computerSelection);
    setNextRound();
    playRound(humanSelection, computerSelection);
    setNextRound();
    playRound(humanSelection, computerSelection);
    setNextRound();
    playRound(humanSelection, computerSelection);

    if(humanScore === computerScore) {
        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);
        console.log("It's a draw!.");
    } else if(humanScore > computerScore) {
        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);
        console.log("You won!");
    } else {
        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);
        console.log("Computer won this game, better luck next time!");
    }
    
}

playGame();





 


