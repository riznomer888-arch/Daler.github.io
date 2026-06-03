// Находим нашу главную кнопку по её ID
const ctaButton = document.getElementById('cta-btn');

// Навешиваем событие клика
ctaButton.addEventListener('click', () => {
    // Выводим всплывающее сообщение на экран
    alert('Ура! Скрипт успешно подключен и работает! Код написан правильно. 🎉');
    
    // Пишем сообщение в консоль разработчика (в браузере F12 -> Console)
    console.log('%c Кнопка была успешно нажата! ', 'background: #22c55e; color: #fff; font-size: 14px;');
});
