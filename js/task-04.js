// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const counter = { value: 0, step: 1 };

const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const valueContetn = document.querySelector('#value');

btnDecrement.addEventListener('click', onDecrementButtonClick);

btnIncrement.addEventListener('click', onIncrementButtonClick);

function onDecrementButtonClick() {
    counter.value -= counter.step;
    valueContetn.textContent = counter.value;
}

function onIncrementButtonClick() {
    counter.value += counter.step;
    valueContetn.textContent = counter.value;
}
