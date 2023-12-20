import { CARDS } from "../../data/memoryGameData";
import { printDefaultScreen } from "../DefaultScreen/defaultScreen";
import "./memoryGame.css";

let count = 0;
let card1;
let card2;
let score = 0;

CARDS.sort(() => Math.random() - Math.random());

const checkEnd = () => {
  const allTheImgs = document.querySelectorAll('.gh-mem-game-card-img');
  if(allTheImgs.length === 16){
    setTimeout( () => {
      alert('Game over! Your score has been ' + score )
    }, 200)
  } else {
    return
  }
}

const resetValues = () => {
  count = 0;
  card1 = undefined;
  card2 = undefined;
}

const resetCard = (card) => {
  card.divDeLaCarta.innerHTML = '';
  setTimeout(() => {
    card.divDeLaCarta.classList.remove('flipped');
  }, 100);
}

const check = () => {
  if(card1.cardData.img === card2.cardData.img){
    score++
    const scoreElement = document.querySelector('.gh-mem-game-count');
    scoreElement.innerHTML = `Score: ${score}`;
    resetValues();
  } else {
    score--
    setTimeout(() => {
      resetCard(card1);
      resetCard(card2);
      resetValues();
    }, 700);
  }
  const scoreElement = document.querySelector('.gh-mem-game-count');
  scoreElement.innerHTML = `Score: ${score}`;

}

const selected = (divCard, card) => {
  if(divCard.innerHTML !== ''){
    return
  }
  if(count < 2){
    count++
    divCard.innerHTML = `<img src="${card.img}" class="gh-mem-game-card-img">`;
    divCard.classList.add('flipped');
  }
  if(count === 1){
    card1 = { divDeLaCarta: divCard, cardData: card};
  }
  if(count === 2){
    card2 = { divDeLaCarta: divCard, cardData: card};
    check();
    checkEnd();
  }
  
}

const printMemoryGame = () => {
  count = 0;
  score = 0;
  const app = document.querySelector("#app");
  app.innerHTML = `<div class="gh-mem-game-screen-board">
  <div class="gh-mem-game-counter">
    <h3 class="gh-mem-game-count">Score: ${score}</h3>
  </div>
  <div class="gh-mem-game-cards-container"></div>
  <div class="gh-mem-game-buttons">
    <button class="gb-mem-game-restart">Restart</button>
    <button class="gb-mem-game-back">Back</button>
  </div>
</div>`;

CARDS.forEach((card) => {
  const cardsContainer = document.querySelector('.gh-mem-game-cards-container')
  const divCard = document.createElement("div");
  divCard.className = "gh-mem-game-card";
  

  divCard.addEventListener('click', () => selected(divCard, card))

  cardsContainer.appendChild(divCard)
})

const restartButton = document.querySelector('.gb-mem-game-restart');
restartButton.addEventListener('click', MemoryGame);

const backButton = document.querySelector('.gb-mem-game-back');
backButton.addEventListener('click', printDefaultScreen)
}

export const MemoryGame = () => {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  app.classList.remove("gb-default-screen", "gb-default-display");
  app.classList.add("gb-mem-game-screen");

  printMemoryGame()
};
