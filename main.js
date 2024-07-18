"use strict";

const footballField = document.querySelector(".football-field");
const footballBall = document.querySelector(".football-ball");

footballField.addEventListener("mousedown", (e) => {
  let x, y;
  console.log(e.offsetX, e.offsetY);
  if (e.offsetX < 25) x = 25 - footballBall.width / 2;
  else if (footballField.offsetWidth - footballBall.width / 2 < e.offsetX)
    x = footballField.offsetWidth - footballBall.width;
  else x = e.offsetX - footballBall.width / 2;

  if (e.offsetY < 25) y = 25 - footballBall.height / 2;
  else if (footballField.offsetHeight - footballBall.height / 2 < e.offsetY)
    y = footballField.offsetHeight - footballBall.height;
  else y = e.offsetY - footballBall.height / 2;

  footballBall.style.left = `${x}px`;
  footballBall.style.top = `${y}px`;
});
