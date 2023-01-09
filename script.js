function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3)
    if (choice == 0) {
        return "rock"
    } else if (choice == 1) {
        return "paper"
    } else if (choice == 2) {
        return "scissors"
    }
}
let playerdisp = document.getElementById('playerscore')
let compdisp = document.getElementById('computerscore')
let rock = document.getElementById('r');
let paper = document.getElementById('p');
let scissors = document.getElementById('s');

let computerscore = 0
let playerscore = 0
function playRound(player, computer) {
    
    if (player == "rock" && computer == "scissors" || player == "paper" && computer == "rock" || player == "scissors" && computer == "paper" ) {
        playerscore++
        return "player wins"
    } else if (player == "rock" && computer == "paper" || player == "paper" && computer == "scissors" || player == "scissors" && computer == "rock") {
        computerscore++
        return "computer wins"
    } else if (player == computer) {
        return "draw"
    } 
    
}

rock.addEventListener('click', () => {
    const computerchoice = getComputerChoice();
    console.log(playRound("rock", computerchoice))
    playerdisp.textContent = playerscore;
    compdisp.textContent = computerscore; 
})

paper.addEventListener('click', () => {
    const computerchoice = getComputerChoice();
    console.log(playRound("paper", computerchoice))
    playerdisp.textContent = playerscore;
    compdisp.textContent = computerscore; 
})

scissors.addEventListener('click', () => {
    const computerchoice = getComputerChoice();
    console.log(playRound("scissors", computerchoice))
    playerdisp.textContent = playerscore;
    compdisp.textContent = computerscore; 
})



function check() {
    if (playerscore > computerscore){
        console.log('You Win')
    } else if (playerscore < computerscore) {
        console.log('Computer Wins')
    } else {console.log('Draw')}
}

/*function game() {
    
    for (let i = 0; i < 5; i++) {
        const playerchoice = prompt("Rock, Paper or Scissors?").toLowerCase();
        console.log(playerchoice)
        console.log(playRound(playerchoice, computerchoice))
        console.log("PLAYER " + playerscore + " - " + "COMPUTER " + computerscore) 
   }
   check()
}

game()*/



