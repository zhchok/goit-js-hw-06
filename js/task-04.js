// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const counter = { value: 0, step: 1 };

const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const valueContetn = document.querySelector('#value');

const onDecrementButtonClick = ({ value, step }) => {
    value -= step;
    valueContetn.textContent = value;
};

onDecrementButtonClick(counter);

btnDecrement.addEventListener('click', onDecrementButtonClick);

const onIncrementButtonClick = () => {
    counter.value += counter.step;
    valueContetn.textContent = counter.value;
};

btnIncrement.addEventListener('click', onIncrementButtonClick);

