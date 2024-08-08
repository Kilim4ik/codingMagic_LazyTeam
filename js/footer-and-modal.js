"use strict";

const footerSubscribeButton = document.querySelector(".footer__form-button");
const subscribeModalBackdrop = document.querySelector(
  ".subscribe-modal-backdrop"
);
const footerInput = document.querySelector(".footer__form-input");

const body = document.querySelector("body");
footerSubscribeButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (footerValidation()) {
    subscribeModalBackdrop.classList.remove("hidden");
    body.style.overflow = "hidden";

    closeSubscribeModal();
  } else {
  }
});

footerInput.addEventListener("input", (e) => {
  if (footerValidation()) {
    footerInput.style.background = "#d7d7d7";
  } else {
    footerInput.style.background = "rgba(256 , 0 , 0 , 0.3)";
  }
});

const subscribeModalCloseButton = document.querySelector(
  ".subscribe-modal__button-close"
);
function footerValidation() {
  return footerInput.value.includes("@") ? true : false;
}
function closeSubscribeModal() {
  subscribeModalCloseButton.addEventListener("click", () => {
    subscribeModalBackdrop.classList.add("hidden");
    body.style.overflow = "scroll";
  });
  document.addEventListener("mousedown", (e) => {
    if (e.target == subscribeModalBackdrop) {
      subscribeModalBackdrop.classList.add("hidden");
      body.style.overflow = "scroll";
    }
  });
}
