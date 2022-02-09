function getComputerChoice() {
    return Math.floor((Math.random() * 5) + 1);
}

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
    1: '<i class="fas fa-hand-rock"></i>',
    2: '<i class="fas fa-hand-scissors"></i>',
    3: '<i class="fas fa-hand-paper"></i>',
    4: '<i class="fas fa-hand-spock"></i>',
    5: '<i class="fas fa-hand-lizard"></i>'
};

let userChoiceID = '';

window.onload = () => {
    const userOptions = document.querySelectorAll('.user-option');

    userOptions.forEach(el => el.addEventListener('click', event => {
        userChoiceID = event.target.id;
    }));

    const playButton = document.querySelector('#play');

    playButton.addEventListener('click', () => {
        const computerChoiceID = getComputerChoice();
        const computerChoice = OPTIONS[computerChoiceID];
        const computerChoiceElement = document.querySelector('#computer-choice');
        const output = document.querySelector('#output');
        const userChoice = OPTIONS[userChoiceID];

        let result = '';

        computerChoiceElement.innerHTML = OPTIONS2EMOJI[computerChoiceID];

        switch (`${computerChoice}-${userChoice}`) {
            case `${ROCK}-${ROCK}`:
            case `${SCISSORS}-${SCISSORS}`:
            case `${PAPER}-${PAPER}`:
            case `${SPOCK}-${SPOCK}`:
            case `${LIZARD}-${LIZARD}`:
                result = 'Its a TIE'
                alert(`Its a Tie! you both chose:\n${userChoice} Try again!`)
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
                
                result = 'You Loose'
                alert(`You lose!\n${computerChoice} beats ${userChoice}`);
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
                result = 'YOU WIN !'
                alert(`You win!\n${userChoice} beats ${computerChoice}`)
                break;
            default:
                result = 'SOMETHING WRONG. TRY AGAIN.'
                alert(`'SOMETHING WRONG. TRY AGAIN.'`)
                break;
        }

        output.innerHTML = result;
    })
}





