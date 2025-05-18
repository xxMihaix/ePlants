let computerPick = Math.floor(Math.random() * 100) + 1;
console.log("Computer's number:", computerPick);

const input = document.getElementById('input1');
const result = document.getElementById('content');
let trying = 0;

function gameStart() {
    const inputValue = input.value.trim();
    result.innerHTML = '';

    const guess = Number(inputValue);

    if (guess > 0 && guess <= 100) {
        trying++;
        if (guess < computerPick) {
            result.innerHTML = `The number ${guess} is too LOW! Try: ${trying}`;
        } else if (guess > computerPick) {
            result.innerHTML = `The number ${guess} is too HIGH! Try: ${trying}`;
        } else {
            result.innerHTML = `🎉 You WIN! Tries: ${trying}`;
        }
    } else {
        result.innerHTML = `Number ${inputValue} is INVALID!`;
    }
    input.value = '';
}

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