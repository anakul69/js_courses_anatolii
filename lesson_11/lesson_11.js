// Форма з вибором улюбленого кольору
const colorForm = document.createElement('form');
const colors = [
    { name: 'Червоний', value: 'red' },
    { name: 'Зелений', value: 'green' },
    { name: 'Синій', value: 'blue' }
];
colors.forEach(color => {
    const label = document.createElement('label');
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'color';
    radio.value = color.value;
    radio.addEventListener('change', () => {
        document.body.style.backgroundColor = radio.value;
    });
    label.appendChild(radio);
    label.appendChild(document.createTextNode(color.name));
    colorForm.appendChild(label);
    colorForm.appendChild(document.createElement('br'));
});
document.body.appendChild(colorForm);

// Форма для вибору хобі з чекбоксами
const hobbiesForm = document.createElement('form');
const hobbies = ['Читання', 'Спорт', 'Музика'];
const selectedHobbies = document.createElement('p');
selectedHobbies.textContent = 'Вибрані хобі: ';

hobbies.forEach(hobby => {
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = hobby;
    checkbox.onchange = () => {
        const checkedHobbies = Array.from(hobbiesForm.querySelectorAll('input[type=checkbox]:checked')).map(cb => cb.value);
        selectedHobbies.textContent = `Вибрані хобі: ${checkedHobbies.join(', ')}`;
    };
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(hobby));
    hobbiesForm.appendChild(label);
    hobbiesForm.appendChild(document.createElement('br'));
});
document.body.appendChild(hobbiesForm);
document.body.appendChild(selectedHobbies);

// Форма з вибором країни із випадаючого списку
const countryForm = document.createElement('form');
const countries = {
    Україна: 'Столиця: Київ, Населення: 41 млн',
    США: 'Столиця: Вашингтон, Населення: 331 млн',
    Німеччина: 'Столиця: Берлін, Населення: 83 млн'
};
const select = document.createElement('select');
const countryInfo = document.createElement('p');

Object.keys(countries).forEach(country => {
    const option = document.createElement('option');
    option.value = country;
    option.textContent = country;
    select.appendChild(option);
});

select.onchange = () => {
    countryInfo.textContent = countries[select.value];
};

countryForm.appendChild(select);
document.body.appendChild(countryForm);
document.body.appendChild(countryInfo);

// Форма для оцінювання якості обслуговування
const ratingForm = document.createElement('form');
const ratingMessage = document.createElement('p');

for (let i = 1; i <= 5; i++) {
    const label = document.createElement('label');
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'rating';
    radio.value = i;
    radio.onchange = () => {
        ratingMessage.textContent = `Дякуємо за вашу оцінку: ${i}`;
    };
    label.appendChild(radio);
    label.appendChild(document.createTextNode(i));
    ratingForm.appendChild(label);
    ratingForm.appendChild(document.createElement('br'));
}

document.body.appendChild(ratingForm);
document.body.appendChild(ratingMessage);

// Динамічний список задач
const taskForm = document.createElement('form');
const taskInput = document.createElement('input');
const addTaskButton = document.createElement('button');
const taskList = document.createElement('ul');

addTaskButton.textContent = 'Додати задачу';
taskInput.placeholder = 'Назва задачі';
taskInput.type = 'text';
addTaskButton.type = 'button';

addTaskButton.onclick = () => {
    const taskName = taskInput.value.trim();
    if (taskName) {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskName;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Видалити';
        deleteButton.onclick = () => taskItem.remove();
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
};

taskForm.appendChild(taskInput);
taskForm.appendChild(addTaskButton);
document.body.appendChild(taskForm);
document.body.appendChild(taskList);
