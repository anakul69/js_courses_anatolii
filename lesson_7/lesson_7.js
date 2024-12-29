// Тема: Spread

// Функція для об'єднання двох масивів
function mergeArrays(array1, array2) {
    const mergedArray = [...array1, ...array2];
    console.log("Об'єднаний масив:", mergedArray);
    return mergedArray;
}

mergeArrays([1, 2, 3], [4, 5, 6]);

// Тема: Rest

// Функція, яка приймає рядок і решту аргументів як масив
function restFunction(firstArg, ...restArgs) {
    console.log("Рядок:", firstArg);
    console.log("Решта аргументів:", restArgs);
}

restFunction("Hello", 1, 2, 3, 4);

// Функція для обчислення середнього значення
function calculateAverage(...numbers) {
    const total = numbers.reduce((sum, num) => sum + num, 0);
    const average = numbers.length > 0 ? total / numbers.length : 0;
    console.log("Середнє значення:", average);
    return average;
}

calculateAverage(10, 20, 30, 40, 50);

// Тема: TypeOf

// Функція для виведення типу аргументу
function checkType(arg) {
    console.log(`Тип аргументу: ${typeof arg}`);
}

checkType(42);
checkType("Hello");
checkType(true);

// Функція для перевірки типу аргументу та виведення відповідного повідомлення
function typeMessage(variable) {
    if (typeof variable === "number") {
        console.log("Це число");
    } else if (typeof variable === "string") {
        console.log("Це рядок");
    } else {
        console.log("Це інший тип");
    }
}

typeMessage(10);
typeMessage("Test");
typeMessage([1, 2, 3]);

// Робота з селекторами

// Вибір елементів через getElementById, getElementsByClassName, getElementsByTagName
const header = document.getElementById("main-header");
const section = document.getElementsByClassName("section-class")[0];
const div = document.getElementsByTagName("div")[0];

console.log("Header:", header);
console.log("Section:", section);
console.log("Div:", div);

// Робота зі списком
const firstLi = document.querySelector("ul li:first-child");
const lastLi = document.querySelector("ul li:last-child");
const thirdLi = document.querySelector("ul li:nth-child(3)");

console.log("Перший елемент списку:", firstLi);
console.log("Останній елемент списку:", lastLi);
console.log("Третій елемент списку:", thirdLi);

const allLi = document.querySelectorAll("ul li");
console.log("Усі елементи списку (NodeList):", allLi);

// Конвертація NodeList у масив
const liArray = Array.from(allLi);
console.log("Усі елементи списку (масив):", liArray);
