// 1. Підрахунок суми парних чисел
let sum = 0;
let number = 1;

while (number <= 20) {
  if (number % 2 === 0) {
    sum += number;
  }
  number++;
}

console.log("Сума парних чисел від 1 до 20:", sum);

// 2. Таблиця множення
const multiplier = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`${multiplier} * ${i} = ${multiplier * i}`);
}

// 3. Зворотний лічильник
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// 4. Перевірка на парність чи непарність
const userInput = 7; // Можете замінити на будь-яке число

if (userInput % 2 === 0) {
  console.log(`${userInput} є парним числом`);
} else {
  console.log(`${userInput} є непарним числом`);
}

// 5. Калькулятор
function calculator(operator, a, b) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return b !== 0 ? a / b : "На нуль ділити не можна";
    default:
      return "Невідомий оператор";
  }
}

console.log(calculator('+', 10, 5));
console.log(calculator('/', 10, 0));

// 6. Переписання стрілкової функції
function multiplyValues(a, b, c) {
  return a * b * c;
}

// Додаткова робота

// 1. Параметри та колбеки
function wellcomUser(users, callback) {
  for (const user of users) {
    callback(user);
  }
}

function hiUser(user) {
  console.log(`Вітаю ${user}`);
}

const users = ["Андрій", "Олена", "Сергій"];
wellcomUser(users, hiUser);

// 2. Стрілкові функції
const wellcomUserArrow = (users, callback) => {
  users.forEach(user => callback(user));
};

const hiUserArrow = user => console.log(`Вітаю ${user}`);

wellcomUserArrow(users, hiUserArrow);
