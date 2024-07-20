"use strict";

const timeCalcInput = document.querySelector("#time-calc-input");
const timeCalcButton = document.querySelector("#time-calc-button");
const timeCalcResult = document.querySelector("#time-calc-result");

timeCalcButton.addEventListener("click", () => showTimeCalcResult());

function showTimeCalcResult() {
  timeCalcResult.innerHTML = calculateTimeCalc();
}
function calculateTimeCalc() {
  const time = timeCalcInput.value;
  let result = ``;
  if (time >= 1440) result += `${Math.floor(time / 60 / 24)}дн. `;
  if (time >= 60) result += `${Math.floor((time / 60) % 24)}:`;
  result += `${time % 60} `;
  return result;
}
