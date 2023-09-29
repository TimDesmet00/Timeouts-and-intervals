// exercice 1

const title = document.getElementsByClassName("write-machine")[0];

const keller = () => {
  const mot = "Keller";
  let index = 0;

  const letterwrite = () => {
    if (index < mot.length) {
      title.textContent += mot[index];
      index++;
    } else {
      clearInterval(interval);
    }
  };

  const interval = setInterval(letterwrite, 1000);
};

keller();

// exercice 2

const timePassed = document.querySelector(".time-passed");
const minutePassed = document.querySelector(".minute-passed");
let secondsPassed = 0;

const updateTimePassed = () => {
  secondsPassed++;
  timePassed.textContent = `${secondsPassed} ${
    secondsPassed === 1 ? "seconde" : "secondes"
  } se sont écoulées.`;

  if (secondsPassed % 60 === 0) {
    const minutes = secondsPassed / 60;
    minutePassed.textContent = `${minutes} ${
      minutes === 1 ? "minute" : "minutes"
    } se sont écoulées.`;
  }
};

setInterval(updateTimePassed, 1000);

// exercice 3

const boardGame = document.querySelector(".board-game");
const scoreElement = document.querySelector(".score");
const gaps = document.querySelectorAll(".gap");
const startButton = document.querySelector(".button-start");

let score = 0;
let moleInterval;
let isMoleClickable = false;
let gameInProgress = false;

const mole = () => {
  if (score >= 10) {
    scoreElement.textContent = "Gagné !";
    clearInterval(moleInterval);
    return;
  } else if (score <= -10) {
    scoreElement.textContent = "Perdu !";
    clearInterval(moleInterval);
    return;
  }
  gaps.forEach((gap) => gap.classList.remove("mole"));

  // Choisissez un trou au hasard
  const randomIndex = Math.floor(Math.random() * gaps.length);
  const randomGap = gaps[randomIndex];

  // Ajoutez la classe mole
  randomGap.classList.add("mole");
  isMoleClickable = true;

  moleTimeout = setTimeout(() => {
    if (isMoleClickable) {
      // Réduisez le score uniquement si la mole n'a pas été cliquée
      score--;
      scoreElement.textContent = `Score: ${score}`;
    }
    randomGap.classList.remove("mole");
    mole();
  }, 1000);
};

const moleClick = (e) => {
  const clickedGap = e.target;

  if (clickedGap.classList.contains("mole")) {
    if (isMoleClickable) {
      score++;
      scoreElement.textContent = `Score: ${score}`;
      isMoleClickable = false;
      clickedGap.classList.remove("mole");
    }
  }
};

gaps.forEach((gap) => {
  gap.addEventListener("click", moleClick);
});

startButton.addEventListener("click", () => {
  if (gameInProgress) {
    score = 0;
    scoreElement.textContent = " Score: 0";
    gaps.forEach((gap) => gap.classList.remove("mole"));
    mole();
  } else {
    gameInProgress = true;
    gaps.forEach((gap) => gap.classList.remove("mole"));
    mole();
  }
});
