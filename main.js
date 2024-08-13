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

document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.querySelector('[data-action="open-modal"]');
    const closeModalBtn = document.querySelector('[data-action="close-modal"]');
    const backdrop = document.querySelector('.js-backdrop');
    const nameInput = document.getElementById("name-input");
    const nameOutput = document.getElementById("name-output");
    
    nameInput.addEventListener("input", () => {
      nameOutput.textContent = nameInput.value.trim()
        ? nameInput.value
        : "User";
    });

    openModalBtn.addEventListener('click', () => {
        document.body.classList.add('show-modal');
    });

    closeModalBtn.addEventListener('click', () => {
        document.body.classList.remove('show-modal');
    });

    backdrop.addEventListener('click', (event) => {
        if (event.target === backdrop) {
            document.body.classList.remove('show-modal');
        }
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            modal.style.display = 'none';
        }
    });

    document.getElementById('save-btn').addEventListener('click', () => {
        const username = document.getElementById('username').value;
        document.getElementById('user-greeting').textContent = `Вітаємо, ${username}!`;
        modal.style.display = 'none';
    });
});

        // Фільтр завдань по категорії
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', () => {
                const category = button.getAttribute('data-category');
                document.querySelectorAll('.task').forEach(task => {
                    task.style.display = task.getAttribute('data-category') === category ? 'block' : 'none';
                });
            });
        });

        // Відображення списку завдань при натисканні на "Інтерактив"
        document.getElementById('dropdown-btn').addEventListener('click', () => {
            document.getElementById('dropdown-content').classList.toggle('show');
        });

        window.onclick = (event) => {
            if (!event.target.matches('#dropdown-btn')) {
                const dropdowns = document.getElementsByClassName('dropdown-content');
                for (let i = 0; i < dropdowns.length; i++) {
                    const openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        };