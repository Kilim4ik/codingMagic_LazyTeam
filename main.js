"use strict";

const footballField = document.querySelector(".football-field");
const footballBall = document.querySelector(".football-ball");

footballField.addEventListener("mousedown", (e) => {
  let x, y;
  const halfOfBall = footballBall.width / 2;
  if (e.offsetX < halfOfBall) x = 0;
  else if (footballField.offsetWidth - halfOfBall < e.offsetX)
    x = footballField.offsetWidth - footballBall.width - 2;
  else x = e.offsetX - halfOfBall;

  if (e.offsetY < halfOfBall) y = 0;
  else if (footballField.offsetHeight - halfOfBall < e.offsetY)
    y = footballField.offsetHeight - footballBall.height - 2;
  else y = e.offsetY - halfOfBall;

  footballBall.style.left = `${x}px`;
  footballBall.style.top = `${y}px`;
});

document.addEventListener("DOMContentLoaded", function () {
  const num1Input = document.getElementById("num1");
  const num2Input = document.getElementById("num2");
  const num3Input = document.getElementById("num3");
  const submitButton = document.getElementById("submit");
  const resultParagraph = document.getElementById("result");

  submitButton.addEventListener("click", function () {
    const num1 = num1Input.value;
    const num2 = num2Input.value;
    const num3 = num3Input.value;

    if (!isNumber(num1) || !isNumber(num2) || !isNumber(num3)) {
      resultParagraph.textContent = "Будь ласка, введіть коректні числа.";
      return;
    }

    const maxNumber = Math.max(Number(num1), Number(num2), Number(num3));
    resultParagraph.textContent = `Найбільше число, яке ви ввели - ${maxNumber}`;
  });

  function isNumber(value) {
    return !isNaN(value) && value.trim() !== "";
  }
});
