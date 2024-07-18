let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
    const choices = ['камінь', 'ножиці', 'папір'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let resultMessage;
    if (userChoice === computerChoice) {
        resultMessage = 'Нічия!';
    } else if (
        (userChoice === 'камінь' && computerChoice === 'ножиці') ||
        (userChoice === 'ножиці' && computerChoice === 'папір') ||
        (userChoice === 'папір' && computerChoice === 'камінь')
    ) {
        resultMessage = 'Ви виграли раунд!';
        userScore++;
    } else {
        resultMessage = 'Комп\'ютер виграв раунд!';
        computerScore++;
    }

    document.getElementById('result').textContent = `${resultMessage} Комп'ютер обрав ${computerChoice}.`;
    document.getElementById('score').textContent = `Рахунок: Комп'ютер - ${computerScore}, Ви - ${userScore}`;
}