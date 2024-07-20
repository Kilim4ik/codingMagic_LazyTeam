'use strict'
function isNumber(value) {
    return !isNaN(value) && value.trim() !== "";
}

function findMax() {
    const num1 = document.getElementById("number1").value;
    const num2 = document.getElementById("number2").value;
    const num3 = document.getElementById("number3").value;

    if (isNumber(num1) && isNumber(num2) && isNumber(num3)) {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);
        const number3 = parseFloat(num3);
        
        const maxNumber = Math.max(number1, number2, number3);
        document.getElementById("result").innerText = `Найбільше число, яке ви ввели - ${maxNumber}`;
    } else {
        document.getElementById("result").innerText = "Будь ласка, введіть коректні числа.";
    }
}
