// Завдання 1: Іменована функція (Максимум двох чисел)
function findMax(a, b) {
    return a > b ? a : b;
}
console.log("Завдання 1 (Максимум між 10 та 25):", findMax(10, 25));

// Завдання 2: Функціональний вираз (Віднімання)
const subtract = function(a, b) {
    return a - b;
};
console.log("Завдання 2 (Віднімання 20 - 7):", subtract(20, 7));

// Завдання 3: Стрілкова функція (Квадратний корінь)
const sqrt = (n) => Math.sqrt(n);
console.log("Завдання 3 (Корінь з 16):", sqrt(16));

// Завдання 4: Рекурсивна функція (Сума геометричної прогресії)
function geometricProgression(n, a, r) {
    if (n === 1) return a;
    return a * Math.pow(r, n - 1) + geometricProgression(n - 1, a, r);
}
console.log("Завдання 4 (Геометрична прогресія n=3, a=2, r=2):", geometricProgression(3, 2, 2));

// Завдання 5: Функція-замикання (Створення дільника)
function createDivider(divisor) {
    return function(num) {
        return num / divisor;
    };
}
const divideByTwo = createDivider(2);
console.log("Завдання 5 (Замикання, дільник 2 для числа 20):", divideByTwo(20));

// Завдання 6: Колбек з множиною Set
function processSet(set, callback) {
    set.forEach(callback);
}
const mySet = new Set([10, 20, 30]);
console.log("Завдання 6 (Колбек для Set):");
processSet(mySet, (value) => console.log(`Елемент: ${value}`));