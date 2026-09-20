// 1. Находим элементы на странице по их ID
const titleElement = document.getElementById('main-title');
const buttonElement = document.getElementById('magic-btn');

// 2. Создаём функцию, которая сработает при клике
function doMagic() {
    // Меняем текст заголовка
    titleElement.textContent = 'Магия сработала! 🚀';

    // Меняем цвет текста на белый
    titleElement.style.color = 'white';

    // Сообщение в консоль разработчика
    console.log('Кнопка нажата! Функция doMagic выполнена успешно.');
}

// 3. "Слушаем" клик по кнопке
buttonElement.addEventListener('click', doMagic);

// Приветствие в консоли при загрузке
console.log('Скрипт успешно загружен и готов к работе!');
