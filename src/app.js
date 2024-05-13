/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "K", "Q", "A"];
const icons = ["♦", "♥", "♠", "♣"];

const randomNumberArray = arr => {
  return Math.floor(Math.random() * arr.length);
};
const numberRandom = numbers[randomNumberArray(numbers)];

const randomIconArray = arr => {
  return Math.floor(Math.random() * arr.length);
};

const iconRandom = icons[randomIconArray(icons)];

let textColor = "text-dark";
if (iconRandom == "♥" || iconRandom == "♦") {
  textColor = "text-danger";
}

window.onload = function() {
  //write your code here
  const appElement = document.getElementById("app");
  appElement.innerHTML = `
  <div class="container d-flex flex-column justify-content-between  mt-5 card" style="width: 24rem; height: 35rem;">
  <div id="iconHigh">
    <h1 class="${textColor}" style="font-size: 100px;">
      ${iconRandom}
    </h1>
  </div>
  <div id="number">
    <h1  style="font-size: 150px; text-align: center;">
      ${numberRandom}
    </h1>
  </div>
  <div id="iconDown" class="text-end">
    <h1 class="${textColor}" style="font-size: 100px;">
      ${iconRandom}
    </h1>
  </div>
</div>
  `;
};
