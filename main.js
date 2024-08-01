"use strict";
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

const footerSubscribeButton = document.querySelector(".footer__form-button");
const SubscribeModalBackdrop = document.querySelector(
  ".subscribe-modal-backdrop"
);

const body = document.querySelector("body");
footerSubscribeButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (footerValidation()) {
    SubscribeModalBackdrop.classList.remove("hidden");
    body.style.overflow = "hidden";

    closeSubscribeModal();
  }
});

const footerSubscribeInput = document.querySelector(".footer__form-input");
const SubscribeModalCloseButton = document.querySelector(
  ".subscribe-modal__button-close"
);
function footerValidation() {
  return footerSubscribeInput.value.includes("@gmail") ? true : false;
}
function closeSubscribeModal() {
  SubscribeModalCloseButton.addEventListener("click", () => {
    SubscribeModalBackdrop.classList.add("hidden");
  });
  document.addEventListener("mousedown", (e) => {
    if (e.target == SubscribeModalBackdrop) {
      SubscribeModalBackdrop.classList.add("hidden");
    }
  });
}
