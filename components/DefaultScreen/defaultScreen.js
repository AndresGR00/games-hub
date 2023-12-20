import { games } from "../../data/defaultScreenGames";
import "./defaultScreen.css";
import { TicTacToe } from "../TicTacToe/ticTacToe";
import { MemoryGame } from "../MemoryGame/memoryGame";
import { WhacAMole } from "../WhacAMole/whacAMole";

export const printDefaultScreen = () => {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  app.classList.add("gb-default-screen", "gb-default-display");
  app.classList.remove("gb-t-game-screen", "gb-t-game-display", 'gb-mem-game-screen', "gb-w-game-screen");

  const title = document.createElement("h1");
  title.className = "gb-default-title";
  title.innerText = "CHOOSE A GAME";

  const gamesContainer = document.createElement("div");
  gamesContainer.className = "gb-default-games-container";

  games.forEach((game, index) => {
    const gameContainer = document.createElement("div");
    gameContainer.className = "gb-default-game-container";

    const gameImage = document.createElement("img");
    gameImage.className = "gb-default-game-image";
    gameImage.src = game.img;

    const gameName = document.createElement("h3");
    gameName.className = "gb-default-game-name";
    gameName.innerText = game.name;

    const gameButton = document.createElement("button");
    gameButton.className = "gb-default-game-button";
    gameButton.innerText = "Play";

    switch (index) {
      case 0:
        gameButton.addEventListener("click", TicTacToe);
        break;
      case 1:
        gameButton.addEventListener("click", MemoryGame);
        break;
      case 2:
        gameButton.addEventListener("click", WhacAMole);
        break;
      default:
        break;
    }

    gameContainer.appendChild(gameImage);
    gameContainer.appendChild(gameName);
    gameContainer.appendChild(gameButton);
    gamesContainer.appendChild(gameContainer);
  });

  app.appendChild(title);
  app.appendChild(gamesContainer);
};
