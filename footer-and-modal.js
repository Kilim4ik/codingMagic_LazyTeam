"use strict";

const footerSubscribeButton = document.querySelector(".footer__form-button");
const SubscribeModalBackdrop = document.querySelector(
  ".subscribe-modal-backdrop"
);
const footerInput = document.querySelector(".footer__form-input");

const body = document.querySelector("body");
footerSubscribeButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (footerValidation()) {
    footerInput.style.background = "#d7d7d7";
    SubscribeModalBackdrop.classList.remove("hidden");
    body.style.overflow = "hidden";

    closeSubscribeModal();
  } else {
    footerInput.style.background = "rgba(256 , 0 , 0 , 0.3)";
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
