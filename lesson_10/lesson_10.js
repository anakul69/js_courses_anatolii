// Завдання 'onMouseOver' і 'onMouseOut': Зміна фону області
const hoverDiv = document.createElement('div');
hoverDiv.style.width = '200px';
hoverDiv.style.height = '200px';
hoverDiv.style.backgroundColor = 'lightgray';
hoverDiv.style.margin = '20px';

document.body.appendChild(hoverDiv);

hoverDiv.onmouseover = () => {
    hoverDiv.style.backgroundColor = 'blue';
};

hoverDiv.onmouseout = () => {
    hoverDiv.style.backgroundColor = 'lightgray';
};

// Завдання 'onMouseOver' і 'onMouseOut' для зображення
const image = document.createElement('img');
image.src = 'https://images.ctfassets.net/ub3bwfd53mwy/5WFv6lEUb1e6kWeP06CLXr/acd328417f24786af98b1750d90813de/4_Image.jpg?w=750';
image.style.transition = 'transform 0.3s, filter 0.3s';
image.style.margin = '20px';
image.style.width = '100px';
image.style.height = '100px';

document.body.appendChild(image);

image.onmouseover = () => {
    image.style.transform = 'scale(1.2)';
    image.style.filter = 'brightness(1.2)';
};

image.onmouseout = () => {
    image.style.transform = 'scale(1)';
    image.style.filter = 'brightness(1)';
};

// Завдання 'keyup': Переміщення об'єкта на полі
const gameField = document.createElement('div');
const gameObject = document.createElement('div');

gameField.style.width = '400px';
gameField.style.height = '400px';
gameField.style.border = '1px solid black';
gameField.style.position = 'relative';
gameField.style.margin = '20px';

gameObject.style.width = '50px';
gameObject.style.height = '50px';
gameObject.style.backgroundColor = 'black';
gameObject.style.position = 'absolute';
gameObject.style.top = '0';
gameObject.style.left = '0';

document.body.appendChild(gameField);
gameField.appendChild(gameObject);

document.addEventListener('keydown', (event) => {
    const step = 10;
    const currentTop = parseInt(gameObject.style.top);
    const currentLeft = parseInt(gameObject.style.left);

    if (event.key === 'ArrowUp' && currentTop > 0) {
        gameObject.style.top = currentTop - step + 'px';
    } else if (event.key === 'ArrowDown' && currentTop < 350) {
        gameObject.style.top = currentTop + step + 'px';
    } else if (event.key === 'ArrowLeft' && currentLeft > 0) {
        gameObject.style.left = currentLeft - step + 'px';
    } else if (event.key === 'ArrowRight' && currentLeft < 350) {
        gameObject.style.left = currentLeft + step + 'px';
    }
});

// Завдання "Форми: Конвертер валют"
const form = document.createElement('form');
const amountInput = document.createElement('input');
const rateInput = document.createElement('input');
const result = document.createElement('p');
const convertButton = document.createElement('button');

amountInput.type = 'number';
amountInput.placeholder = 'Сума';
amountInput.style.marginRight = '10px';

rateInput.type = 'number';
rateInput.placeholder = 'Курс';
rateInput.style.marginRight = '10px';

convertButton.textContent = 'Конвертувати';
convertButton.type = 'button';

form.appendChild(amountInput);
form.appendChild(rateInput);
form.appendChild(convertButton);
form.appendChild(result);

document.body.appendChild(form);

convertButton.onclick = () => {
    const amount = parseFloat(amountInput.value);
    const rate = parseFloat(rateInput.value);

    if (isNaN(amount) || isNaN(rate)) {
        result.textContent = 'Будь ласка, введіть коректні значення';
    } else {
        result.textContent = `Результат: ${amount * rate} (в іншій валюті)`;
    }
};
