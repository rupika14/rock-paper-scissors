

let pScore=0;
let cScore=0;

function getComputerChoice(){
  let outputs = ['rock','paper', 'scissors'];
  return outputs[Math.floor(Math.random()*3)];
}

function getHumanChoice(){
  let input = prompt(`Player: ${pScore}\nComputer: ${cScore}\nEnter Rock Paper or Scissors`).toLowerCase().trim();
  return input;
}


function playRound() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    alert(`Player: ${pScore}\nComputer: ${cScore}\nIt's a Draw`);
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'rock')
  ) {
    pScore++;
    alert(`Player: ${pScore}\nComputer: ${cScore}\nYou Win! ${humanChoice} beats ${computerChoice}`);
  } else {
    cScore++;
    alert(`Player: ${pScore}\nComputer: ${cScore}\nYou Lose! ${computerChoice} beats ${humanChoice}`);
  }
}

function game() {
  for (let round = 1; round <= 3; round++) {
    playRound();
  }
  alert(`Final Score\nPlayer: ${pScore}\nComputer: ${cScore}`);
}

game();