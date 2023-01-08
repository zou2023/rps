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




function game() {
    
    for (let i = 0; i < 5; i++) {
        const computerchoice = getComputerChoice();
        const playerchoice = prompt("Rock, Paper or Scissors?").toLowerCase();
        console.log(playerchoice)
        console.log(playRound(playerchoice, computerchoice))
        console.log("PLAYER " + playerscore + " - " + "COMPUTER " + computerscore) 
   }
   console.log("end")
}

game()



