let matchResult = document.getElementById("matchresult");
let counterSay = document.getElementById("counter");
const rockSelected = document.getElementById("button1");
const paperSelected = document.getElementById("button2");
const scissorSelected = document.getElementById("button3");
const deleteScore = document.getElementById("delete");

let playerPick = ""; // Trebuie sa fie let

let counter = {
    wins: 0,
    loses: 0,
    ties: 0 
}



function playGame(playerChoice) {
    playerPick = playerChoice;

    let savedCounter = localStorage.getItem('counter');

    if (savedCounter) {
        counter = JSON.parse(savedCounter); // Dacă există, îl convertim din string în obiect
    } else {
        counter = { wins: 0, loses: 0, ties: 0 }; // Dacă nu există, setăm scorul pe 0
    }

    // Alegerea computerului
    const computerPick = Math.floor(Math.random() * 3) + 1;
    let computerPickSays = "";

    if (computerPick === 1) {
        computerPickSays = "Rock";
    } else if (computerPick === 2) {
        computerPickSays = "Paper";
    } else {
        computerPickSays = "Scissors";
    }

    // Determinare rezultat
    let result = "";
    if (playerPick === computerPickSays) {
        result = "It's a tie!";
        counter.ties += 1;
    } else if (
        (playerPick === "Rock" && computerPickSays === "Scissors") ||
        (playerPick === "Paper" && computerPickSays === "Rock") ||
        (playerPick === "Scissors" && computerPickSays === "Paper")
    ) {
        result = "You win!";
        counter.wins += 1;
    } else {
        result = "You lose!";
        counter.loses += 1;
    }

    localStorage.setItem(`counter`, JSON.stringify(counter));



    matchResult.textContent = `Computer picked ${computerPickSays.toUpperCase()}, you picked ${playerPick.toUpperCase()}. ${result}`;

    counterSay.textContent = `Wins:${counter.wins}  Loses:${counter.loses}  Ties:${counter.ties}`;
}

function deleteScoreFunction() {
    counter.wins = 0;
    counter.loses = 0;
    counter.ties = 0;
    localStorage.removeItem('counter');
    location.reload();
}

// Event listeners pentru butoane
rockSelected.addEventListener("click", () => playGame("Rock"));
paperSelected.addEventListener("click", () => playGame("Paper"));
scissorSelected.addEventListener("click", () => playGame("Scissors"));
deleteScore.addEventListener("click", () => deleteScoreFunction());


document.addEventListener( 'DOMContentLoaded', function() {

    if(localStorage.getItem("isDark") === "true"){

        elements = document.querySelectorAll('body');

        elements.forEach( element => {

            element.classList.add('dark-mode')
        })
    }
    else{ 
        console.log(" NU tema întunecată restaurată.");
    }
})