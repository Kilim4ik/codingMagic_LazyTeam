"use strict";

const footballField = document.querySelector(".football-field");
const footballBall = document.querySelector(".football-ball");

footballField.addEventListener("mousedown", (e) => {
  let x, y;
  console.log(e.offsetX, e.offsetY);
  if (e.offsetX < 25) x = 25 - footballBall.width / 2;
  if (e.offsetY < 25) y = 25 - footballBall.height / 2;
  if (e.offsetX >= footballField.offsetWidth)
    x = footballField.offsetWidth - footballBall.width / 2;
  if (e.offsetY >= footballField.offsetWidth)
    y = footballField.offsetWidth - footballBall.height / 2;

  footballBall.style.left = `${x}px`;
  footballBall.style.top = `${y}px`;
  console.log(x, y);
});
console.log(footballField.offsetWidth);
