// push

// Завдання 1
const pushArray = [];
pushArray.push(1, 2, 3, "hello", "world");
console.log("Після використання push:", pushArray);

// Завдання 2
function addElementToArray(array, element) {
    array.push(element);
}
const arrayForPush = [4, 5, 6];
addElementToArray(arrayForPush, 7);
console.log("Після додавання елемента через функцію:", arrayForPush);

// pop

// Завдання 1
const popArray = [10, 20, 30, 40];
const lastElement = popArray.pop();
console.log("Після використання pop:", popArray);
console.log("Видалений елемент:", lastElement);

// Завдання 2
function removeLastElement(array) {
    return array.pop();
}
const arrayForPop = [50, 60, 70];
const removedElement = removeLastElement(arrayForPop);
console.log("Після видалення останнього елемента через функцію:", arrayForPop);
console.log("Видалений елемент:", removedElement);

// unshift

// Завдання 1
const unshiftArray = [100, 200, 300];
unshiftArray.unshift(0, 50);
console.log("Після використання unshift:", unshiftArray);

// Завдання 2
function addElementToStart(array, element) {
    array.unshift(element);
}
const arrayForUnshift = [400, 500, 600];
addElementToStart(arrayForUnshift, 350);
console.log("Після додавання елемента в початок через функцію:", arrayForUnshift);

// shift

// Завдання 1
const shiftArray = ["a", "b", "c", "d"];
const firstElement = shiftArray.shift();
console.log("Після використання shift:", shiftArray);
console.log("Видалений елемент:", firstElement);

// Завдання 2
function removeFirstElement(array) {
    return array.shift();
}
const arrayForShift = ["x", "y", "z"];
const removedFirstElement = removeFirstElement(arrayForShift);
console.log("Після видалення першого елемента через функцію:", arrayForShift);
console.log("Видалений елемент:", removedFirstElement);

// fill

// Завдання 1
const fillArray = new Array(5).fill(0);
console.log("Масив після заповнення через fill:", fillArray);

// Завдання 2
function fillArrayWithValues(array, value, start, end) {
    return array.fill(value, start, end);
}
const arrayForFill = [1, 2, 3, 4, 5];
fillArrayWithValues(arrayForFill, 9, 1, 4);
console.log("Масив після заповнення через функцію:", arrayForFill);

// Додаткове завдання
function sortAndReplace(array) {
    array.sort((a, b) => b - a);
    array.fill(10, 0, 3);
    return array;
}
const arrayForSortAndReplace = [5, 8, 2, 1, 7, 6, 4];
const updatedArray = sortAndReplace(arrayForSortAndReplace);
console.log("Масив після сортування та заміни:", updatedArray);
