var randomNumber = 0;

document.addEventListener("DOMContentLoaded", function () {
  randomGenerator();

  const randomDiceNumber1 = Math.floor(randomNumber);
  const diceName1 = "./images/dice" + randomDiceNumber1 + ".png";
  const firstDiceImage1 = document.querySelectorAll("img")[0];
  firstDiceImage1.setAttribute("src", diceName1);

  randomGenerator();

  const randomDiceNumber2 = Math.floor(randomNumber);
  const diceName2 = "./images/dice" + randomDiceNumber2 + ".png";
  const firstDiceImage2 = document.querySelectorAll("img")[1];
  firstDiceImage2.setAttribute("src", diceName2);

  const result = document.querySelectorAll("h1")[0];

  if (randomDiceNumber1 > randomDiceNumber2) {
    result.innerHTML = "Player1 wins &#128681";
  } else if (randomDiceNumber1 < randomDiceNumber2) {
    result.innerHTML = "Player2 wins &#128681";
  } else if (randomDiceNumber1 === randomDiceNumber2) {
    result.innerHTML = "Draw";
  }
});

function randomGenerator() {
  randomNumber = Math.random() * 6 + 1;
}
