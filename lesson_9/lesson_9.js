// 1. onclick: зміна кольору тексту
const button1 = document.createElement('button');
button1.textContent = 'Змінити колір тексту';
const paragraph = document.createElement('p');
paragraph.textContent = 'Це текст для зміни кольору';

document.body.appendChild(button1);
document.body.appendChild(paragraph);

button1.onclick = () => {
    paragraph.style.color = getRandomColor();
};

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// 2. ondblclick: збільшення розміру елементу
const resizableElement = document.createElement('div');
resizableElement.textContent = 'Подвійний клік для збільшення';
resizableElement.style.width = '100px';
resizableElement.style.height = '100px';
resizableElement.style.backgroundColor = 'lightblue';
resizableElement.style.textAlign = 'center';
resizableElement.style.lineHeight = '100px';
resizableElement.style.margin = '20px';

resizableElement.ondblclick = () => {
    const currentWidth = parseInt(resizableElement.style.width);
    const currentHeight = parseInt(resizableElement.style.height);
    resizableElement.style.width = currentWidth * 2 + 'px';
    resizableElement.style.height = currentHeight * 2 + 'px';
    resizableElement.style.lineHeight = currentHeight * 2 + 'px';
};

document.body.appendChild(resizableElement);

// 3. addEventListener і removeEventListener
const button2 = document.createElement('button');
button2.textContent = 'Збільшити лічильник';
const counterText = document.createElement('p');
counterText.textContent = 'Лічильник: 0';
let counter = 0;

document.body.appendChild(button2);
document.body.appendChild(counterText);

const incrementCounter = () => {
    counter++;
    counterText.textContent = `Лічильник: ${counter}`;
    if (counter > 10) {
        button2.removeEventListener('click', incrementCounter);
        button2.disabled = true;
    }
};

button2.addEventListener('click', incrementCounter);

// 4. Видалення елементу при кліку
const button3 = document.createElement('button');
button3.textContent = 'Додати 10 елементів';
const elementsContainer = document.createElement('div');
document.body.appendChild(button3);
document.body.appendChild(elementsContainer);

button3.onclick = () => {
    for (let i = 1; i <= 10; i++) {
        const element = document.createElement('div');
        element.textContent = `Елемент ${i}`;
        element.style.border = '1px solid black';
        element.style.padding = '5px';
        element.style.margin = '5px';
        element.onclick = () => {
            element.remove();
        };
        elementsContainer.appendChild(element);
    }
};

// 5. event.target
const blockContainer = document.createElement('div');
blockContainer.classList.add('blockContainer');

document.body.appendChild(blockContainer);

['first', 'second', 'third'].forEach((className, index) => {
    const button = document.createElement('button');
    button.textContent = `Button ${index + 1}`;
    button.classList.add(`button`, className);
    blockContainer.appendChild(button);
});

blockContainer.onclick = (event) => {
    if (event.target.tagName === 'BUTTON') {
        alert(`Ви натиснули на кнопку: ${event.target.classList[1]}`);
    }
};

// 6. onclick + робота з css
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Відкрити меню';
const menu = document.createElement('ul');
menu.style.display = 'none';
menu.style.listStyle = 'none';
menu.style.padding = '0';

['Link 1', 'Link 2', 'Link 3'].forEach((linkText) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = linkText;
    a.href = '#';
    li.appendChild(a);
    menu.appendChild(li);
});

toggleButton.onclick = () => {
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
        toggleButton.textContent = 'Закрити меню';
    } else {
        menu.style.display = 'none';
        toggleButton.textContent = 'Відкрити меню';
    }
};

document.body.appendChild(toggleButton);
document.body.appendChild(menu);
