// Напишите код, который симулирует бросок двух шестигранных игральных кубиков и определяет, выпал ли выигрышный дубль.
// Дубль считается выигрышным, если на обоих дайсах выпало одно и то же число, и это число больше 3.

// Для успешного прохождения тестов не меняйте названия переменных :)

// let dice1 = // ваш код
// let dice2 = // ваш код
// let isWinningDouble = // ваш код

let dice1 = Math.floor(Math.random() * 6) + 1
let dice2 = Math.floor(Math.random() * 6) + 1
let isWinningDouble = dice1 === dice2 && dice1 > 3

console.log('Первый бросок: ' + dice1)
console.log('Второй бросок: ' + dice2)
if (isWinningDouble) {
  console.log('Выигрышный дубль!')
} else {
  console.log('Не выигрышный дубль.')
}
