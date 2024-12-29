// splice

// Завдання 1
const spliceArray = [1, 2, 3, 4, 5, 6, 7];
spliceArray.splice(2, 3); // Видаляємо 3 елементи з індексу 2
console.log("Масив після використання splice:", spliceArray);

// Завдання 2
function removeElementsWithSplice(array, index, count) {
    array.splice(index, count);
}
const arrayForSplice = [10, 20, 30, 40, 50];
removeElementsWithSplice(arrayForSplice, 1, 2);
console.log("Масив після видалення через функцію:", arrayForSplice);

// map

// Завдання 1
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num ** 2);
console.log("Квадрати чисел:", squaredNumbers);

// Завдання 2
function transformArray(array, transformFn) {
    return array.map(transformFn);
}
const arrayForMap = [10, 20, 30];
const transformedArray = transformArray(arrayForMap, num => `Value: ${num}`);
console.log("Перетворений масив через функцію:", transformedArray);

// filter

// Завдання 1
const numbersForFilter = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbersForFilter.filter(num => num % 2 === 0);
console.log("Парні числа:", evenNumbers);

// Завдання 2
function filterArray(array, conditionFn) {
    return array.filter(conditionFn);
}
const arrayForFilter = [15, 22, 33, 42, 55];
const filteredArray = filterArray(arrayForFilter, num => num > 20);
console.log("Відфільтрований масив через функцію:", filteredArray);

// Переписаний код

// Замість var
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Замість var
const message = 'test';
function example() {
    if (true) {
        const message = 'Hello, world!';
        console.log(message);
    }
    console.log(message); // Виведе 'test'
}

// for in для об'єкта

const person = {
    name: 'John',
    age: 25,
    occupation: 'Developer'
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// for of та for in для масиву об'єктів

const students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'C' }
];

for (const student of students) {
    for (const key in student) {
        console.log(`${key}: ${student[key]}`);
    }
}
