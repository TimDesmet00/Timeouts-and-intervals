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
let score = 0;
let moleInterval;
let isMoleClickable = false;

const mole = () => {
  gaps.forEach((gap) => gap.classList.remove("mole"));

  // Choisissez un espace au hasard
  const randomIndex = Math.floor(Math.random() * gaps.length);
  const randomGap = gaps[randomIndex];

  // Ajoutez la classe "mole" à l'espace choisi pour afficher la mole
  randomGap.classList.add("mole");
  isMoleClickable = true;
};

const moleClick = (e) => {
  if (!isMoleClickable) {
    return; // Sortez de la fonction si la "mole" n'est pas cliquable
  }
  const clickedGap = e.target;

  if (clickedGap.classList.contains("mole")) {
    score++;
    scoreElement.textContent = `Score: ${score}`;
    clickedGap.classList.remove("mole");
    isMoleClickable = false;
  }
};

gaps.forEach((gap) => {
  gap.addEventListener("click", moleClick);
});

mole();
moleInterval = setInterval(mole, 1000);
