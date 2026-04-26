// === 1. ЗБЕРІГАННЯ ДАНИХ ТА ВИВЕДЕННЯ СИСТЕМНОЇ ІНФОРМАЦІЇ ===
// Отримуємо дані про ОС та браузер [cite: 18, 19, 20, 21]
const info = {
    os: navigator.platform,
    browser: navigator.userAgent
};

// Зберігаємо ці дані в localStorage у форматі JSON [cite: 23, 24, 41]
localStorage.setItem('systemInfo', JSON.stringify(info));

// Виводимо інформацію на сторінку (пряма маніпуляція DOM) [cite: 25, 26, 27]
const osElement = document.getElementById('os-info');
const browserElement = document.getElementById('browser-info');

if (osElement) osElement.textContent = info.os;
if (browserElement) browserElement.textContent = info.browser;


// === 2. ВІДОБРАЖЕННЯ ДИНАМІЧНОГО ВМІСТУ (ВАРІАНТ 19) ===
// Використовуємо Fetch API для отримання коментарів 19-го поста [cite: 46, 54, 55]
fetch('https://jsonplaceholder.typicode.com/posts/19/comments')
    .then(response => response.json())
    .then(data => {
        const reviewsList = document.getElementById('reviews-list');
        if (reviewsList) {
            // Очищаємо текст завантаження та виводимо список відгуків [cite: 57, 128]
            reviewsList.innerHTML = data.map(comment => `
                <div style="border: 1px solid #ccc; margin: 10px 0; padding: 15px; border-radius: 10px; background: rgba(255,255,255,0.05);">
                    <h4 style="text-transform: capitalize; margin-top: 0;">${comment.name}</h4>
                    <p style="font-style: italic;">"${comment.body}"</p>
                    <small style="color: #888;">Email: ${comment.email}</small>
                </div>
            `).join('');
        }
    })
    .catch(error => console.error('Помилка завантаження відгуків:', error));


// === 3. МОДАЛЬНЕ ВІКНО ЗВОРОТНЬОГО ЗВ'ЯЗКУ (АВТОМАТИЧНЕ) ===
// Встановлюємо таймер на 1 хвилину (60000 мс) [cite: 73, 172, 174, 220]
const feedbackTimer = setTimeout(() => {
    // Для базової версії index.html використовуємо alert або показуємо прихований div
    alert("Форма зворотнього зв'язку: Залиште свій відгук!");
    console.log("Модальне вікно активовано через 60 секунд");
}, 2000);


// === 4. ПЕРЕХІД НА НІЧНИЙ/ДЕННИЙ РЕЖИМ (РОЗУМНИЙ ПЕРЕМИКАЧ) ===
const hours = new Date().getHours();

// Автоматичне встановлення теми за часом (День: 07:00 - 21:00) [cite: 76, 77, 78, 235, 237]
if (hours >= 7 && hours < 21) {
    document.body.classList.add('light-mode');
} else {
    document.body.classList.add('dark-mode'); // Нічна тема [cite: 81, 240, 251]
}

// Ручне перемикання теми через кнопку [cite: 82, 83, 86, 241, 242]
const themeBtn = document.getElementById('theme-toggle');
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
    });
}

const hours = new Date().getHours();

// Денна тема: від 07:00 до 21:00
if (hours >= 7 && hours < 21) {
    document.body.classList.add('light-mode');
} else {
    document.body.classList.add('dark-mode'); // Нічна тема
}

// Ручне перемикання через кнопку
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


