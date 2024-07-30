"use strict";
const randomNumber = Math.round(Math.random() * 100);

const inputTask2 = document.querySelector("#task2-input");
const buttonTask2 = document.querySelector("#task2-button");
const massegeTask2 = document.querySelector("#task2-massege");

buttonTask2.addEventListener("click", () => {
  const userNum = inputTask2.value;
  if (isNaN(Number(userNum))) {
    massegeTask2.innerHTML = `Ця гра підтримує тільки числа !`;
    massegeTask2.style.color = "#990000";
    return;
  }
  if (randomNumber == Number(userNum)) {
    massegeTask2.innerHTML = `Вітаю, ви вгадали число! (${randomNumber}) `;
    massegeTask2.style.color = "#039900 ";
  } else {
    massegeTask2.innerHTML = `Ви програли, комп’ютер загадав (${randomNumber}) `;
    massegeTask2.style.color = "#990000";
  }
});

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
