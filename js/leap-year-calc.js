document.addEventListener("DOMContentLoaded", function() {
    const checkButton = document.getElementById("checkButton");
    const result = document.getElementById("result");

    checkButton.addEventListener("click", function() {
        const yearInput = document.getElementById("yearInput").value;
        const year = parseInt(yearInput);

        if (isNaN(year)) {
            result.textContent = "Будь ласка, введіть коректний рік.";
            return;
        }

        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            result.textContent = `Ви народилися у високосний рік!`;
            result.className = 'result leap';
        } else {
            result.textContent = `Ви народилися не у високосний рік!`;
            result.className = 'result not-leap';
        }
    });
});