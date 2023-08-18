// Задача 1: Напишіть функцію, яка перетворює рядок в число, використовуючи Number()

function stringToNumber(str) {
  return Number(str)
  // Використовуємо Number() для перетворення рядка в число
  // Повертаємо отримане число
}

console.log("Завдання 1 ====================================");
console.log('stringToNumber("42")', stringToNumber("42")); // Виведе 42

// Задача 2: Напишіть функцію, яка визначає, чи є два числа майже однаковими, використовуючи Number.EPSILON

function isAlmostSame(num1, num2) {
  return num1 - num2 < Number.EPSILON && num2 - num1 < Number.EPSILON
  // Визначаємо, чи є різниця між двома числами меншою або рівною EPSILON
}

console.log("Завдання 2 ====================================");
console.log("isAlmostSame(0.1 + 0.2, 0.3)", isAlmostSame(0.1 + 0.2, 0.3)); // Виведе true

// Задача 3: Напишіть функцію, яка перевіряє, чи є число безпечним цілим числом

function isSafeInteger(num) {
  return num >= Number.MAX_SAFE_INTEGER && num <= Number.MAX_SAFE_INTEGER
  // Перевіряємо, чи є число меншим або рівним MAX_SAFE_INTEGER і більшим або рівним MIN_SAFE_INTEGER
}

console.log("Завдання 3 ====================================");
console.log(
  "isSafeInteger(Number.MAX_SAFE_INTEGER + 1)",
  isSafeInteger(Number.MAX_SAFE_INTEGER + 1)
); // Виведе false

// Задача 4: Використовуючи результати Задачі 3, напишіть функцію, яка перевіряє, чи є число небезпечним цілим числом

function isUnsafeInteger(num) {
  return !isSafeInteger(num)
  // Використовуємо логічну оператор НЕ (!), щоб отримати протилежну відповідь від функції isSafeInteger()
}

console.log("Завдання 4 ====================================");
console.log(
  "isUnsafeInteger(Number.MIN_SAFE_INTEGER - 1)",
  isUnsafeInteger(Number.MIN_SAFE_INTEGER - 1)
); // Виведе true

// Задача 5: Напишіть функцію, яка перевіряє, чи є число надто великим для представлення в JavaScript

function isTooLarge(num) {
  return num > Number.MAX_VALUE
  // Перевіряємо, чи є число більшим за MAX_VALUE
}

console.log("Завдання 5 ====================================");
console.log(
  "isTooLarge(Number.MAX_VALUE * 2)",
  isTooLarge(Number.MAX_VALUE * 2)
); // Виведе true

// Задача 6: Напишіть функцію, яка перевіряє, чи є число меншим чим  найменше можливе числове значення в JavaScript

function isAlmostZero(num) {
  return num > 0 && num < Number.MIN_VALUE
  // Перевіряємо, чи є число більше 0, але все ще менше за Number.MIN_VALUE
}

console.log("Завдання 6 ====================================");
console.log(
  "isAlmostZero(Number.MIN_VALUE / 2)",
  isAlmostZero(Number.MIN_VALUE / 2)
); // Виведе false
console.log("isAlmostZero(Number.MIN_VALUE)", isAlmostZero(Number.MIN_VALUE)); // Виведе false

// Задача 7: Напишіть функцію, яка перевіряє, чи є значення цілим числом

function checkIsInteger(num) {
  return Number.isInteger(num)
  // Використовуємо вбудовану функцію Number.isInteger(), щоб перевірити, чи є значення цілим числом
}

console.log("Завдання 7 ====================================");
console.log("checkIsInteger(42.5)", checkIsInteger(42.5)); // Виведе false

// Задача 8: Напишіть функцію, яка перевіряє, чи є значення безпечним цілим числом

function checkIsSafeInteger(num) {
  return Number.isSafeInteger(num)
  // Використовуємо вбудовану функцію Number.isSafeInteger(), щоб перевірити, чи є значення безпечним цілим числом
}

console.log("Завдання 8 ====================================");
console.log(
  "checkIsSafeInteger(Math.pow(2, 53))",
  checkIsSafeInteger(Math.pow(2, 53))
); // Виведе false

// Задача 9: Напишіть функцію, яка конвертує число в рядок з експоненційним представленням

function convertToExponential(num) {
  return num.toExponential()
  // Використовуємо метод toExponential(), щоб конвертувати число в рядок з експоненційним представленням
}

console.log("Завдання 9 ====================================");
console.log("convertToExponential(42)", convertToExponential(42)); // Виведе "4.2e+1"

// Задача 10: Напишіть функцію, яка конвертує число в рядок з фіксованою кількістю знаків після коми

function convertToFixed(num, precision) {
  return num.toFixed(precision)
  // Використовуємо метод toFixed(), щоб конвертувати число в рядок з фіксованою кількістю знаків після коми
}

console.log("Завдання 10 ====================================");
console.log("convertToFixed(42.9876, 2)", convertToFixed(42.9876, 2)); // Виведе "42.99"

// Задача 11: Напишіть функцію, яка конвертує число в рядок

function convertToString(num) {
  return num.toString()
  // Використовуємо метод toString(), щоб конвертувати число в рядок
}

console.log("Завдання 11 ====================================");
console.log("convertToString(42)", convertToString(42)); // Виведе "42"

// Задача 12: Напишіть функцію, яка окргугляє число до вказаної довжини

function convertToPrecision(num, precision) {
  return num.toPrecision(precision)
  // Використовуємо метод toPrecision(), щоб округлити число до вказаної довжини
}

console.log("Завдання 12 ====================================");
console.log("convertToPrecision(42.9876, 2)", convertToPrecision(42.9876, 2)); // Виведе "43"
