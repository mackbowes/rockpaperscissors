let playerHand = '';
let computerHand = '';
let playerCount = 0;
let computerCount = 0;

function computerPlay() {
  let temp = Math.random(); //Generate a number between 0 and 1
  (temp > 0.66) //Check value big
  ? temp = "ROCK"
  : (temp < 0.33) //Check value small
  ? temp = "SCISSORS"
  : temp = "PAPER" //Everything else
  temp = temp.toUpperCase();
  return temp;
} //Return the hand


function playerPlay(playerHand) {
  do {
  playerHand = String(window.prompt("What will you throw: Rock, Paper, or Scissors?"));
  playerHand = playerHand.toUpperCase();
  switch(playerHand) {
    case 'ROCK':
    break;
    case 'SCISSORS':
    break;
    case 'PAPER':
    break;
    default:
    window.alert("Please select from Rock, paper, or Scissors");
    playerHand = '';
    break;
  }
} while (playerHand == '');
  return playerHand;
}

function playRound(playerHand, computerHand) {
  switch(playerHand) {
    case 'ROCK':
      switch(computerHand) {
        case 'ROCK':
        return 'TIE';
        case 'PAPER':
        computerCount++;
        return 'LOSE';
        case 'SCISSORS':
        playerCount++;
        return 'WIN';
        break;
      }
    break;
    case 'PAPER':
      switch(computerHand) {
        case 'ROCK':
        playerCount++;
        return 'WIN';
        case 'PAPER':
        return 'TIE';
        case 'SCISSORS':
        computerCount++;
        return 'LOSE';
        break;
      }
    break;
    case 'SCISSORS':
      switch(computerHand) {
        case 'ROCK':
        computerCount++;
        return 'LOSE';
        case 'PAPER':
        playerCount++;
        return 'WIN';
        case 'SCISSORS':
        return 'TIE';
        break;
      }
    break;
    default:
    return 'Something Went Wrong';
    break;
  }
}

function game() {
  do {
    playRound(playerPlay(playerHand),computerPlay(computerHand));
    console.log("Your points: " + playerCount + ". Computer points: " + computerCount);
  } while (playerCount < 5 && computerCount < 5);
}

game();
