"use strict";

const footballField = document.querySelector(".football-field");
const footballBall = document.querySelector(".football-ball");

footballField.addEventListener("mousedown", (e) => {
  let x = e.offsetX - footballBall.width / 2;
  let y = e.offsetY - footballBall.height / 2;
  footballBall.style.left = `${x}px`;
  footballBall.style.top = `${y}px`;
});
