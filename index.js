
let result = "";
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('input');

const player = document.querySelector("#playerscore");
player.textContent = `Player score: ${playerScore}`;

const computer = document.querySelector("#computerscore");
computer.textContent = `Computer score: ${computerScore}`;

const output = document.querySelector("#results");
output.textContent = "Get five points to win!";

function getComputerChoice(min = 1, max = 4)
{
    
    let difference = max - min;

    let random = Math.random();

    random = Math.floor(random * difference);

    random = random + min;

    if (random == 1)
    {
        return "rock";
    } 
    else if (random == 2)
    {
        return "paper";
    } 
    else if (random == 3)
    {
        return "scissors";
    }

    
}

console.log(getComputerChoice());


function playRound(playerSelection)
{
    const computerSelection = getComputerChoice();


    if (playerSelection === computerSelection)
    {
         result = `Its a TIE! You chose ${playerSelection}, and The Computer chose ${computerSelection}.`;
         output.style.color = "blue";
    }

    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
      ) {
        result = `You WON! You chose ${playerSelection}, and The Computer chose ${computerSelection}.`;
        output.style.color = "green";
        playerScore++;
        
      }

    if (
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "rock")
      ) {
        result = `You LOST! You chose ${playerSelection}, and The Computer chose ${computerSelection}.`;
        output.style.color = "red";
        computerScore++;
        
      } 
      
                if (playerScore == 5){
                    result = "You Won the Game! Well played!";
                    playerScore = 0;
                    computerScore = 0;
                    player.textContent = "Player Score: " + playerScore;
                    computer.textContent = "Computer Score: " + computerScore;
                }
                else if (computerScore == 5){
                    result = "You Lost the game. Better luck next time!"
                    playerScore = 0;
                    computerScore = 0;
                    player.textContent = "Player Score: " + playerScore;
                    computer.textContent = "Computer Score: " + computerScore;
                }

    
    //document.getElementById('scoreboard').textContent = result
    //document.getElementById('playerscore').textContent = playerScore
    //document.getElementById('computerscore').textContent = computerScore
    //player.textContent = `Player score: ${playerScore}`;
    player.textContent = "Player score: " + playerScore;
    computer.textContent = "Computer score: " + computerScore;
    output.textContent = result;

    return;
}





buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})