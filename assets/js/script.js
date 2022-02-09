// We need a function to return a random number in range 1 to 5 for a computer choice.
function getComputerChoice() {
    return Math.floor((Math.random() * 5) + 1);
}

//We want to add some consts that would help us later.
const ROCK = 'ROCK';
const SCISSORS = 'SCISSORS';
const PAPER = 'PAPER';
const SPOCK = 'SPOCK';
const LIZARD = 'LIZARD';
const OPTIONS = {
    1: ROCK,
    2: SCISSORS,
    3: PAPER,
    4: SPOCK,
    5: LIZARD
};
const OPTIONS2EMOJI = {
    1: '⛰️',
    2: '✂️',
    3: '🧻',
    4: '🖖',
    5: '🦎'
};

// Now we want to store user input somewhere.
let userChoiceID = '';

//We want to add event listeners for user input when a page is loaded. 
//To do that we should write our code inside the callback function.
window.onload = () => {
    //We need an element to output results. 
    const output = document.querySelector('#output');
    // We want  to add event listeners to handle user input.
    // First, we would select elements by class. Then we would add an event listener to each element. 
    const userOptions = document.querySelectorAll('.user-option');

    userOptions.forEach(el => el.addEventListener('click', event => {
        userChoiceID = event.target.id;
    }));


//Now we want to add an event listener to the play button.
const playButton = document.querySelector('#play');
// event listener
playButton.addEventListener('click', () => {

// information that we need to determine the winner.
//We need a computer and user choice. 
    const computerChoiceID = getComputerChoice();
    const computerChoice = OPTIONS[computerChoiceID];
    const computerChoiceElement = document.querySelector('#computer-choice');
    const output = document.querySelector('#output');
    const userChoice = OPTIONS[userChoiceID];

    let result = '';
//Now we can output computer choice.
    computerChoiceElement.innerHTML = OPTIONS2EMOJI[computerChoiceID];

//Let's write logic to determine a winner. We would use a switch for that.
// Don't forget to add a default case.(?)
    switch (`${computerChoice}-${userChoice}`) {
        case `${ROCK}-${ROCK}`:
        case `${SCISSORS}-${SCISSORS}`:
        case `${PAPER}-${PAPER}`:
        case `${SPOCK}-${SPOCK}`:
        case `${LIZARD}-${LIZARD}`:
            result = 'TIE 👔'
            break;
        case `${ROCK}-${SCISSORS}`:
        case `${ROCK}-${LIZARD}`:
        case `${SCISSORS}-${PAPER}`:
        case `${SCISSORS}-${LIZARD}`:
        case `${PAPER}-${ROCK}`:
        case `${PAPER}-${SPOCK}`:
        case `${SPOCK}-${ROCK}`:
        case `${SPOCK}-${SCISSORS}`:
        case `${LIZARD}-${PAPER}`:
        case `${LIZARD}-${SPOCK}`:
            result = 'COMPUTER WIN 😔💔 🤖🥇'
            break;
        case `${ROCK}-${PAPER}`:
        case `${ROCK}-${SPOCK}`:
        case `${SCISSORS}-${ROCK}`:
        case `${SCISSORS}-${SPOCK}`:
        case `${PAPER}-${SCISSORS}`:
        case `${PAPER}-${LIZARD}`:
        case `${SPOCK}-${PAPER}`:
        case `${SPOCK}-${LIZARD}`:
        case `${LIZARD}-${ROCK}`:
        case `${LIZARD}-${SCISSORS}`:
            result = 'YOU WIN ☺️🥇 🤖💔'
            break;
        default:
            result = 'SOMETHING WRONG. TRY AGAIN. 🐛'
        }
//Now we are ready to output the result.
            output.innerHTML = result;
    })
//Put it at the end of the play button click callback.
}
//hodovani ##
//https://hackernoon.com/how-to-create-rock-paper-scissors-spock-lizard-in-javascript-991k36hy//