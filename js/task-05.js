// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

function makeOutputContent(event) {
    // скажіть будь-ласка який спосіб є бьльш правильний і зрозуміліший

    event.currentTarget.value
        ? (output.textContent = event.currentTarget.value)
        : (output.textContent = 'Anonymous');

    // if (input.value === '') {
    //     output.textContent = 'Anonymous';
    // } else {
    //     output.textContent = event.currentTarget.value;
    // }

    // input.value
    //     ? (output.textContent = input.value)
    //     : (output.textContent = 'Anonymous');
}
input.addEventListener('input', makeOutputContent);
