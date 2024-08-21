document.addEventListener('DOMContentLoaded', function() {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const num3Input = document.getElementById('num3');
    const submitButton = document.getElementById('submit');
    const resultParagraph = document.getElementById('result');

    submitButton.addEventListener('click', function() {
        const num1 = num1Input.value;
        const num2 = num2Input.value;
        const num3 = num3Input.value;

        if (!isNumber(num1) || !isNumber(num2) || !isNumber(num3)) {
            resultParagraph.textContent = 'Будь ласка, введіть коректні числа.';
            return;
        }

        const maxNumber = Math.max(Number(num1), Number(num2), Number(num3));
        resultParagraph.textContent = `Найбільше число, яке ви ввели - ${maxNumber}`;
    });

    function isNumber(value) {
        return !isNaN(value) && value.trim() !== '';
    }
});