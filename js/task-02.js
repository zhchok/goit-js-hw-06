// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>
// JavaScript містить масив рядків.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul.ingredients.

const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');

const makeIngredientsList = param => {
    return param.map(ingredient => {
        const itemEl = document.createElement('li');
        itemEl.textContent = ingredient;
        itemEl.classList.add('.item');

        return itemEl;
    });
};
const elements = makeIngredientsList(ingredients);
ingredientsListEl.append(...elements);

console.log(ingredientsListEl);
