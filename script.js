document.getElementById('yes-btn').addEventListener('click', function() {
    document.getElementById('response').textContent = 'Дякую :)';
});

document.getElementById('no-btn').addEventListener('click', function() {
    document.getElementById('reason-container').classList.remove('hidden');
});

document.getElementById('submit-reason').addEventListener('click', function() {
    const reason = document.getElementById('reason-input').value;
    document.getElementById('response').textContent = `Зрозуміло. Причина: ${reason}`;
});