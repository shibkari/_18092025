/*
 ! Завдання: Розробка Вищої Функції для Модифікації Поведінки Іншої Функції

 Створіть вищу функцію (higher-order function) modifyFunction, яка приймає як аргументи функцію originalFunction та число multiplier.

 Функція originalFunction приймає один числовий аргумент і повертає квадрат цього числа (число, помножене на саме себе).

 modifyFunction повинна повертати нову функцію, яка при виклику з будь-яким числовим аргументом викликає originalFunction з цим аргументом і множить результат на multiplier.

 Наприклад, якщо originalFunction повертає квадрат вхідного аргументу, і multiplier дорівнює 3, 
 то повернута функція повинна повертати квадрат вхідного аргументу, помножений на 3.
*/

function originalFunction(num) {
  return num * num;

}

function modifyFunction(originalFunc, multiplier) {
  return function(num) {
    const result = originalFunc(num);
    return result * multiplier;
  }
}

// Приклад використання
// const modifiedFunc = modifyFunction(originalFunction, 3)
// console.log('Original function output for 4:', originalFunction(4)) // Повинно вивести 16
// console.log('Modified function output for 4:', modifiedFunc(4)) // Повинно вивести 48 (16 * 3)

/*
 У цьому коді ми створюємо модифіковану версію originalFunction за допомогою modifyFunction з множником 3.
 Потім ми виводимо результати для обох функцій, коли вони викликаються з аргументом 4.

 originalFunction(4) повинно повернути 16 (4 * 4), а modifiedFunc(4) повинно повернути 48, оскільки 16 (результат originalFunction) множиться на 3 (множник у modifyFunction).
*/

export { originalFunction, modifyFunction }
