"use strict";
const randomNumber = Math.round(Math.random() * 100);

const input = document.querySelector(".search-input__input");
input.addEventListener("blur", () => {
  const userNumber = input.target.value;
  const massege = document.querySelector(".random-number__massege");
  if (randomNumber == Number(userNumber)) {
    massege.innerHTML("");
  }
});
