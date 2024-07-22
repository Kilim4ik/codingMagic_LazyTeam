'use strict'
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

let currentSlide = 0;
const students = document.querySelectorAll(".student");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function updateSlider() {
  students.forEach((student, index) => {
    student.classList.toggle("active", index === currentSlide);
  });
  prevButton.classList.toggle("hidden", currentSlide === 0);
  nextButton.classList.toggle("hidden", currentSlide === students.length - 1);
}

prevButton.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlider();
  }
});

nextButton.addEventListener("click", () => {
  if (currentSlide < students.length - 1) {
    currentSlide++;
    updateSlider();
  }
});

updateSlider();