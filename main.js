"use strict";
const randomNumber = Math.round(Math.random() * 100);

const inputTask2 = document.querySelector("#task2-input");
const buttonTask2 = document.querySelector("#task2-button");
const massegeTask2 = document.querySelector("#task2-massege");

buttonTask2.addEventListener("click", () => {
  const userNum = inputTask2.value;

  if (randomNumber == Number(userNum)) {
    massegeTask2.innerHTML = `Вітаю, ви вгадали число! (${randomNumber}) `;
    massegeTask2.style.color = "#039900 ";
  } else {
    massegeTask2.innerHTML = `Ви програли, комп’ютер загадав (${randomNumber}) `;
    massegeTask2.style.color = "#990000";
  }
});
