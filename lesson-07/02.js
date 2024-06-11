// function isNumeric(str) {
//   // ваш код здесь
// }

// console.log(isNumeric("123")) // Ожидаемый результат: true
// console.log(isNumeric("12.3")) // Ожидаемый результат: true
// console.log(isNumeric("123abc")) // Ожидаемый результат: false
// console.log(isNumeric("abc")) // Ожидаемый результат: false
// console.log(isNumeric(" ")) // Ожидаемый результат: false

function isNumeric(str) {
  if (str.trim() === '') return false

  return !isNaN(Number(str))
}
