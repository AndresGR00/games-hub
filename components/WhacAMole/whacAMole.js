import "./whacAMole.css";
import { printDefaultScreen } from "../DefaultScreen/defaultScreen";

let score = 0;
let count = 60;
let timerInterval;
let moleInterval;

const timer = () => {
  const divTimer = document.querySelector('.gh-w-game-timer');
  
  const updateTimer = () => {
    count--
    divTimer.innerHTML = `<p>Time: ${count}</p>`;

    if(count === 0){
      clearInterval(timerInterval);
      clearInterval(moleInterval);
      if(score >= 25){
        alert('You win!')
      } else {
        alert('You lost!')
      }
    }
  }
  timerInterval = setInterval(updateTimer, 1000);
}

const generateMole = () => {
  const allTheBoxes = document.querySelectorAll(".gh-w-game-box");

  const showMole = () => {
    const randomNumber = Math.floor(Math.random() * allTheBoxes.length);

    const randomBox = allTheBoxes[randomNumber];

    randomBox.innerHTML = `<img class="gh-w-game-mole" src="https://res.cloudinary.com/dbinlquvz/image/upload/v1702986233/5_GamesHub/Memory-Game/Reversed/mem-game_8_fcsrf7.png" width="80%">`;

    const clickHandler = () => {
      score++;
      const scoreContainer = document.querySelector(".gh-w-game-score");
      scoreContainer.innerHTML = `Score: ${score}`;

      // Borramos el listener con el click, ya no hace nada si pinchamos
      randomBox.querySelector('.gh-w-game-mole').removeEventListener('click', clickHandler);
    };

    randomBox.querySelector('.gh-w-game-mole').addEventListener("click", clickHandler);

    setTimeout(() => {
      randomBox.innerHTML = "";
    }, 999);
  };

  moleInterval = setInterval(showMole, 1000);
};

const printWhacAMole = () => {
  const app = document.querySelector("#app");
  app.innerHTML = `<div class="gm-w-game-score-and-timer">
  <h3 class="gh-w-game-score">Score: ${score}</h3>
  <p class="gh-w-game-minimum-score">Score required to win: 25</p>
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

  const restartButton = document.querySelector(".gb-w-game-restart");
  restartButton.addEventListener("click", () => {
    count = 60;
    score = 0;
    const scoreContainer = document.querySelector(".gh-w-game-score");
    scoreContainer.innerHTML = `Score: ${score}`;
    clearInterval(timerInterval);
    clearInterval(moleInterval);
    timer();
    generateMole();
  });

  const backButton = document.querySelector(".gb-w-game-back");
  backButton.addEventListener("click", () => {
    count = 60;
    score = 0;
    const scoreContainer = document.querySelector(".gh-w-game-score");
    scoreContainer.innerHTML = `Score: ${score}`;
    clearInterval(timerInterval);
    clearInterval(moleInterval);
    printDefaultScreen();
  });

  generateMole();
};

export const WhacAMole = () => {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  app.classList.remove("gb-default-screen", "gb-default-display");
  app.classList.add("gb-w-game-screen");

  printWhacAMole();  
  timer();
};
