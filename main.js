"use strict";

const standCalcFirstNum = document.querySelector("#standart-calc-first-num");
const standCalcSecondNum = document.querySelector("#standart-calc-second-num");
const standCalcResult = document.querySelector(".standart-calc__result");
const standCalcOperations = document.querySelectorAll(
  ".standart-calc__operator"
);
for (let elem of standCalcOperations) {
  let result;
  elem.addEventListener("click", () => {
    let result = "error";
    switch (elem.textContent) {
      case "+":
        result = standCalcFirstNum + standCalcSecondNum;
      case "-":
        result = standCalcFirstNum + standCalcSecondNum;
      case "+":
        result = standCalcFirstNum + standCalcSecondNum;
      case "+":
        result = standCalcFirstNum + standCalcSecondNum;
      default:
        result = "error";
    }
  });
}
