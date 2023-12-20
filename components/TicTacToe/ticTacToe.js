import { O, X } from "../../data/ticTacToeData";
import { printDefaultScreen } from "../DefaultScreen/defaultScreen";
import "./ticTacToe.css";

let isPlayerOneX;
let Buttons;
let moves = 0;

export const TicTacToe = () => {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  app.classList.remove("gb-default-screen", "gb-default-display");
  app.classList.add("gb-t-game-screen", "gb-t-game-display");

  app.innerHTML = `<div class="gb-t-game-choose-start">
  <h3 class="gh-t-who-start">Who starts?</h3>
  <div class="gb-t-game-options">
      <img src="${X}" alt="X" class="gb-t-game-x-img" />    
      <img src="${O}" alt="O" class="gb-t-game-o-img" />    
  </div>
</div>`;

  

  const imageX = document.querySelector(".gb-t-game-x-img");
  imageX.addEventListener("click", () => {
    isPlayerOneX = true;
    moves = 0;
    printBoard();
  });
  const imageO = document.querySelector(".gb-t-game-o-img");
  imageO.addEventListener("click", () => {
    isPlayerOneX = false;
    moves = 0;
    printBoard();
  });

};

const nextMove = (e) => {
  let buttonElement = e.target.closest(".gb-t-game-box"); //Pinche donde pinche (img o btn) manejo en el evento como si hubiera hecho click en .gb-t-game-box (btn)

  if (buttonElement) {
    let buttonValue = buttonElement.innerHTML;

    if (!buttonValue) {
      buttonElement.innerHTML = isPlayerOneX
        ? `<img src="${X}" alt="X" width="80%">`
        : `<img src="${O}" alt="O" width="80%">`;
      isPlayerOneX = !isPlayerOneX;

      moves++
    }
    checkVictory(0, 1, 2);
    checkVictory(3, 4, 5);
    checkVictory(6, 7, 8);
    checkVictory(0, 3, 6);
    checkVictory(1, 4, 7);
    checkVictory(2, 5, 8);
    checkVictory(0, 4, 8);
    checkVictory(6, 4, 2);

    checkDraw();
  }
};

const checkDraw = () => {
  if(moves === Buttons.length){
    setTimeout(() => {
      alert('Empate');
      Buttons.forEach((button) => {
        button.disabled = true;
      });
    }, 150);
  }
}

const checkVictory = (c1, c2, c3) => {
  const symbol = Buttons[c1].innerHTML;
  if (
    Buttons[c1].innerHTML &&
    Buttons[c1].innerHTML === Buttons[c2].innerHTML &&
    Buttons[c1].innerHTML === Buttons[c3].innerHTML
  ) {
    setTimeout(() => {
      alert(
        `Winner: ${
          symbol === `<img src="${X}" alt="X" width="80%">` ? "X" : "O"
        }`
      );
      Buttons.forEach((button) => {
        button.disabled = true;
      });
    }, 150);
  }
};

const printBoard = () => {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  app.innerHTML = `<div class="gb-t-game-board">
  <button class="gb-t-game-box"></button>
  <button class="gb-t-game-box"></button>
  <button class="gb-t-game-box"></button>
  <button class="gb-t-game-box"></button>
  <button class="gb-t-game-box"></button>
  <button class="gb-t-game-box"></button>
  <button class="gb-t-game-box"></button>
  <button class="gb-t-game-box"></button>
  <button class="gb-t-game-box"></button>
</div>

<div class="gb-t-game-buttons">
  <button class="gb-t-game-restart">Restart</button>
  <button class="gb-t-game-back">Back</button>
</div>`;

  Buttons = document.querySelectorAll(".gb-t-game-box");
  Buttons.forEach((button) => {
    button.addEventListener("click", nextMove);
  });

  const restartButton = document.querySelector(".gb-t-game-restart");
  restartButton.addEventListener("click", TicTacToe);

  const backButton = document.querySelector(".gb-t-game-back");
  backButton.addEventListener("click", printDefaultScreen);
};
