const getUserChoice = userInput => {
  let userChoice = userInput.toLowerCase();
  if(userChoice === 'rock' || userInput ===  'paper' || userInput ===  'scissors') {
    return userChoice;
  } else {
    console.log('error');
  }
}

function getComputerChoice() {
  let choice = Math.floor(Math.random()* 3)
  if(choice == 1){
    let computerChoice = 'Rock';
    return computerChoice;
  } else if(choice == 2) {
    let computerChoice = 'Scissors';
    return computerChoice;
  } else {
    let computerChoice = 'Paper';
    return computerChoice;
  }
}

function determineWinner(userChoice, computerChoice) {
  if(userChoice === 'rock') {
    switch (computerChoice){
      case computerChoice = 'Rock':
        return 'It\s a tie!'
      case computerChoice = 'Scissors':
        return 'You win!!!'
      case computerChoice = 'Paper':
        return 'You lose LOL'
    }
  } else if(userChoice === 'Paper') {
      switch (computerChoice){
        case computerChoice = 'Rock':
          return 'You win!!!!'
        case computerChoice = 'Scissors':
          return 'The PC wins!'
        case computerChoice = 'Paper':
          return 'It\'s a tie!'
      }
  } else {
      switch (computerChoice){
        case computerChoice = 'Rock':
          return 'The PC wins'
        case computerChoice = 'Scissors':
          return 'It\s a tie!'
        case computerChoice = 'Paper':
          return 'You win!!'
      }
  }
}

const userChoice = getUserChoice('paper');
const computerChoice = getComputerChoice();

console.log(userChoice);
console.log(computerChoice);
console.log(determineWinner(userChoice, computerChoice));
