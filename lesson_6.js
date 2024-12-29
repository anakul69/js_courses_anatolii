// 1. Створення класу та об'єкта
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const john = new Person("John", 30);
console.log(john);

// 2. Методи класу
class PersonWithMethod extends Person {
    sayHello() {
        console.log(`Привіт! Мене звати ${this.name}.`);
    }
}

const johnWithMethod = new PersonWithMethod("John", 30);
johnWithMethod.sayHello();

// 3. Наслідування
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    study() {
        console.log(`${this.name} навчається зі студентським номером ${this.studentId}.`);
    }
}

const student = new Student("Alice", 20, "S12345");
student.study();

// Завдання для Math.min та Math.max
function findMin(a, b) {
    return Math.min(a, b);
}

function findMax(a, b) {
    return Math.max(a, b);
}

console.log("Мінімум:", findMin(10, 20));
console.log("Максимум:", findMax(10, 20));

// Завдання для Math.pow
function power(base, exponent) {
    return Math.pow(base, exponent);
}

console.log("Результат піднесення до степеня:", power(2, 3));

// Завдання для Math.floor та Math.ceil
function roundDown(number) {
    return Math.floor(number);
}

function roundUp(number) {
    return Math.ceil(number);
}

console.log("Округлення вниз:", roundDown(4.7));
console.log("Округлення вгору:", roundUp(4.7));

// Завдання для Date.getYear
function getBirthYear(age) {
    const currentYear = new Date().getFullYear();
    return currentYear - age;
}

console.log("Рік народження:", getBirthYear(25));

// Завдання для Date.toLocaleString
const currentDate = new Date();
console.log("Поточна дата та час:", currentDate.toLocaleString());

// Завдання для String.split та toUpperCase
const sentence = "hello world welcome to javascript";
const words = sentence.split(" ");
const upperCaseWords = words.map(word => word.toUpperCase());
console.log("Масив слів у верхньому регістрі:", upperCaseWords);

// Додаткове завдання: "Камінь, ножниці, папір"
function playGame() {
    const choices = ["камінь", "ножниці", "папір"];
    const userChoice = prompt("Введіть ваш вибір: камінь, ножниці або папір").toLowerCase();
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    if (!choices.includes(userChoice)) {
        alert("Неправильний вибір, спробуйте ще раз!");
        return;
    }

    alert(`Ваш вибір: ${userChoice}, Вибір комп'ютера: ${computerChoice}`);

    if (userChoice === computerChoice) {
        alert("Нічия!");
    } else if (
        (userChoice === "камінь" && computerChoice === "ножниці") ||
        (userChoice === "ножниці" && computerChoice === "папір") ||
        (userChoice === "папір" && computerChoice === "камінь")
    ) {
        alert("Ви виграли!");
    } else {
        alert("Ви програли!");
    }
}

playGame();
