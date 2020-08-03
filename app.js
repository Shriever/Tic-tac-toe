let playerOneturn = true;
let gameEnd = false;
let winsX = 0;
let winsO = 0;

let blocks = document.querySelectorAll(".block");

blocks.forEach((block) => {
  block.addEventListener("click", () => {
    if (block.textContent === "X" || block.textContent === "O") {
      //   this is to continue the loop
    } else if (playerOneturn) {
      // textcontent = X
      block.textContent = "X";
      playerOneturn = false;
      checkGameStatus();
    } else {
      // textcontent = O
      block.textContent = "O";
      playerOneturn = true;
      checkGameStatus();
    }
  });
});

function newGame() {
  blocks.forEach((block) => {
    block.textContent = "";
  });
  gameEnd = false;
  playerOneturn = true;
}

function checkGameStatus() {
  blocksText = [];

  for (let block of blocks) {
    blocksText.push(block.textContent);
  }

  // check columns
  for (let i = 0; i < 9; i += 3) {
    if (blocksText[i] === "") continue;

    if (
      blocksText[i] === blocksText[i + 1] &&
      blocksText[i] === blocksText[i + 2]
    ) {
      winner(blocksText[i]);
      break;
    }
  }
  // check rows
  for (let i = 0; i < 3; i++) {
    if (blocksText[i] === "") continue;

    if (
      blocksText[i] === blocksText[i + 3] &&
      blocksText[i] === blocksText[i + 6]
    ) {
      winner(blocksText[i]);
      break;
    }
  }

  //  check diagonals
  if (
    blocksText[0] !== "" &&
    blocksText[0] === blocksText[4] &&
    blocksText[0] === blocksText[8]
  ) {
    winner(blocksText[0]);
  } else if (
    blocksText[2] !== "" &&
    blocksText[2] === blocksText[4] &&
    blocksText[2] === blocksText[6]
  ) {
    winner(blocksText[2]);
  }
}
function updateScores() {
  let pX = document.getElementById("player-x");
  let pO = document.getElementById("player-o");

  pX.textContent = `X : ${winsX}`;
  pO.textContent = `O : ${winsO}`;
}

function winner(letter) {
  if (gameEnd) return;
  // congradulate winner
  let head = document.createElement("h2");
  let node = document.createTextNode(`${letter} Wins!`);
  head.appendChild(node);

  alert(`${letter} Wins!`);

  if (letter === "X") {
    winsX++;
  } else {
    winsO++;
  }
  updateScores();
  gameEnd = true;
}

document.getElementById("new-game").addEventListener("click", newGame);

newGame();
