// Завдання 1
let number1 = 5;
let number2 = 10;
alert(number1 === number2 ? "Числа рівні" : "Числа не рівні");

// Завдання 2
let userNumber = prompt("Введіть число:");
console.log(userNumber % 2 === 0 ? "Число парне" : "Число непарне");

// Завдання 3
let age = prompt("Введіть ваш вік:");
console.log(age < 18 ? "Доступ заборонено" : "Доступ дозволено");

// Завдання 4
let price = prompt("Введіть ціну товару:");
let quantity = prompt("Введіть кількість товару:");
let totalCost = price * quantity;
console.log("Загальна вартість товару: " + totalCost);

// Завдання 5
let productCost = prompt("Введіть вартість товару:");
let discount = productCost * 0.5;
alert("Знижка на товар: " + discount);

// Завдання 6
let num1 = prompt("Введіть перше число:");
let num2 = prompt("Введіть друге число:");
let num3 = prompt("Введіть третє число:");
let maxNumber = Math.max(num1, num2, num3);
console.log("Найбільше число: " + maxNumber);

// Завдання 7
let month = prompt("Введіть номер місяця (від 1 до 12):");
let season;
if ([12, 1, 2].includes(+month)) {
  season = "Зима";
} else if ([3, 4, 5].includes(+month)) {
  season = "Весна";
} else if ([6, 7, 8].includes(+month)) {
  season = "Літо";
} else if ([9, 10, 11].includes(+month)) {
  season = "Осінь";
} else {
  season = "Некоректний номер місяця";
}
console.log("Сезон: " + season);

// Завдання 8
let enteredNumber = prompt("Введіть число:");
if (enteredNumber > 0) {
  console.log("Число є додатнім");
} else if (enteredNumber < 0) {
  console.log("Число є від'ємним");
} else {
  console.log("Число дорівнює нулю");
}