"use strict";

const standCalcFirstNum = document.querySelector("#standart-calc-first-num");
const standCalcSecondNum = document.querySelector("#standart-calc-second-num");
const standCalcResult = document.querySelector(".standart-calc__result");
const standCalcOperations = document.querySelectorAll(
  ".standart-calc__operator"
);
let result, firstNum, secondNum, mark;

standCalcOperations.forEach((elem) => standCalc(elem));
function standCalc(elem) {
  elem.addEventListener("click", (e) => {
    if (elem.textContent == "=") {
      firstNum = Number(standCalcFirstNum.value);
      secondNum = Number(standCalcSecondNum.value);
      switch (mark) {
        case "+":
          result = firstNum + secondNum;
          break;
        case "-":
          result = firstNum - secondNum;
          break;

        case "*":
          result = firstNum * secondNum;
          break;

        case "/":
          if (secondNum) result = firstNum / secondNum;
          else result = "error";
          break;
      }
      standCalcResult.innerHTML = result;
    } else {
      mark = e.target.textContent;
    }
  });
}
