const footballField = document.querySelector(".football-field");
const footballBall = document.querySelector(".football-ball");

footballField.addEventListener("mousedown", (e) => {
  let x, y;
  const halfOfBall = footballBall.width / 2;
  if (e.offsetX < halfOfBall) x = 0;
  else if (footballField.offsetWidth - halfOfBall < e.offsetX)
    x = footballField.offsetWidth - footballBall.width - 2;
  else x = e.offsetX - halfOfBall;

  if (e.offsetY < halfOfBall) y = 0;
  else if (footballField.offsetHeight - halfOfBall < e.offsetY)
    y = footballField.offsetHeight - footballBall.height - 2;
  else y = e.offsetY - halfOfBall;

  footballBall.style.left = `${x}px`;
  footballBall.style.top = `${y}px`;
});
