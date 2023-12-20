import "./whacAMole.css";
import { printDefaultScreen } from "../DefaultScreen/defaultScreen";

const generateMole = () => {
  const allTheBoxes = document.querySelectorAll('.gh-w-game-box');

  const showMole = () => {
    const randomNumber = Math.floor(Math.random() * allTheBoxes.length);
    const randomBox = allTheBoxes[randomNumber];
    randomBox.innerHTML = `<img src="https://res.cloudinary.com/dbinlquvz/image/upload/v1702986233/5_GamesHub/Memory-Game/Reversed/mem-game_8_fcsrf7.png" width="40%">`;
    setTimeout( () => {
      randomBox.innerHTML = '';
    }, 999)
  }
  setInterval(showMole, 1000);
}

const printWhacAMole = () => {
  const app = document.querySelector("#app");
  app.innerHTML= `<div class="gm-w-game-score-and-timer">
  <h3 class="gh-w-game-score">Score:</h3>
  <p class="gh-w-game-minimum-score">Score required to win: 10</p>
  <div class="gh-w-game-timer"></div>
</div>
<div class="gh-w-game-container">
  <div class="gh-w-game-box"></div>
  <div class="gh-w-game-box"></div>
  <div class="gh-w-game-box"></div>
  <div class="gh-w-game-box"></div>
  <div class="gh-w-game-box"></div>
  <div class="gh-w-game-box"></div>
  <div class="gh-w-game-box"></div>
  <div class="gh-w-game-box"></div>
  <div class="gh-w-game-box"></div>
</div>
<div class="gh-w-game-buttons">
  <button class="gb-w-game-restart">Restart</button>
  <button class="gb-w-game-back">Back</button>
</div>`;

const restartButton = document.querySelector('.gb-w-game-restart');
restartButton.addEventListener('click', WhacAMole);

const backButton = document.querySelector('.gb-w-game-back');
backButton.addEventListener('click', printDefaultScreen)

generateMole()
}

export const WhacAMole = () => {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  app.classList.remove("gb-default-screen", "gb-default-display");
  app.classList.add("gb-w-game-screen");

  printWhacAMole();
};
