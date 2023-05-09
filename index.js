let result = "";
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input');

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
        result = "tie";
    }

    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
      ) {
        result = "win";
        playerScore++;
      }

    if (
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "rock")
      ) {
        result = "lose";
        computerScore++;
      } 
      
    
    
    document.getElementById('scoreboard').innerHTML = result
    document.getElementById('playerscore').innerHTML = playerScore
    document.getElementById('computerscore').innerHTML = computerScore
    return;
}

function gameEnd()
{

}



buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})