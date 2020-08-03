let playerOneturn = true;
let gameEnd = false;

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

/*
for (block of blocks) {
  block.addEventListener("click", () => {
    console.log(block);
    // if (block.textContent !== "") {
    //   //   console.log("null");
    //   return;
    // }

    if (playerOneturn) {
      // textcontent = X
      block.textContent = "X";
      playerOneturn = false;
    } else {
      // textcontent = O
      block.textContent = "O";
      playerOneturn = true;
    }
  });
}
*/

function newGame() {
  blocks.forEach((block) => {
    block.textContent = "";
  });
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
    blocksText[1] !== "" &&
    blocksText[1] === blocksText[5] &&
    blocksText[1] === blocksText[9]
  ) {
    winner(blocksText[1]);
  } else if (
    blocksText[3] !== "" &&
    blocksText[3] === blocksText[5] &&
    blocksText[3] === blocksText[7]
  ) {
    winner(blocksText[3]);
  }
}

function winner(letter) {
  console.log(`${letter} has won!`);
}

newGame();
