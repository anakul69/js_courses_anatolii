// Створення header з стилями
const header = document.createElement('header');
header.style.padding = '50px';
header.style.backgroundColor = 'yellow';
header.style.textAlign = 'center';
document.body.appendChild(header);

// Створення меню в header (Пункт 3)
const menuData = [
    { name: 'Головна', url: '/' },
    { name: 'Про нас', url: '/about' },
    { name: 'Послуги', url: '/services' },
    { name: 'Контакти', url: '/contact' },
    { name: 'Блог', url: '/blog' }
];

menuData.forEach(item => {
    const link = document.createElement('a');
    link.textContent = item.name;
    link.href = item.url;
    link.style.margin = '0 10px'; // Додаємо відступи між посиланнями
    header.appendChild(link);
});

// Додавання атрибута target="_blank" для всіх посилань
const links = header.querySelectorAll('a');
links.forEach(link => {
    link.setAttribute('target', '_blank');
});

// Створення блоку з 50 div
const flexBlock = document.createElement('div');
flexBlock.style.display = 'flex';
flexBlock.style.flexWrap = 'wrap';
flexBlock.style.gap = '10px';
flexBlock.style.marginTop = '20px';
document.body.appendChild(flexBlock);

for (let i = 0; i < 50; i++) {
    const circle = document.createElement('div');
    circle.style.width = '50px';
    circle.style.height = '50px';
    circle.style.borderRadius = '50%';
    circle.style.backgroundColor = getRandomColor(); // Функція для випадкового кольору
    circle.style.border = '1px solid #000';
    flexBlock.appendChild(circle);
}

// Додавання класу circle-elemt для 50 div
const circles = flexBlock.querySelectorAll('div');
circles.forEach(circle => {
    circle.classList.add('circle-elemt');
});

// Функція для генерації випадкового кольору
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Створення блоку-контейнера та елементів Р
const container = document.createElement('div');
container.style.marginTop = '30px';
container.style.padding = '20px';
container.style.border = '1px solid #ccc';
container.style.backgroundColor = '#f9f9f9';
document.body.appendChild(container);

const elementsArray = [
    { text: 'Елемент 1', usePrepend: true },
    { text: 'Елемент 2', usePrepend: false },
    { text: 'Елемент 3', usePrepend: true }
];

elementsArray.forEach(element => {
    const paragraph = document.createElement('p');
    paragraph.textContent = element.text;
    paragraph.style.margin = '10px 0';

    if (element.usePrepend) {
        container.prepend(paragraph);
    } else {
        container.append(paragraph);
    }
});
