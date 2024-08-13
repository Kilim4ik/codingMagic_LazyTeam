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