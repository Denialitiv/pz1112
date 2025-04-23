const buttons = document.getElementById('buttons');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const reasonContainer = document.getElementById('reason-container');
const response = document.getElementById('response');

// Обробка кнопки "Так"
yesBtn.addEventListener('click', function() {
    buttons.classList.add('hidden');
    response.textContent = 'Дякую :)';
});

// Обробка кнопки "Ні"
noBtn.addEventListener('click', function() {
    buttons.classList.add('hidden');
    reasonContainer.classList.remove('hidden');
});

// Обробка причини (якщо обрано "Ні")
document.getElementById('submit-reason').addEventListener('click', function() {
    const reason = document.getElementById('reason-input').value;
    reasonContainer.classList.add('hidden');
    response.textContent = `Зрозуміло. Причина: ${reason || "не вказана"}`;
});
