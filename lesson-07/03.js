// function truncate(str, maxLength) {
//   // ваш код здесь
// }

/*
console.log(truncate("Вот, что мне действительно нравится в этом...", 20)) // Ожидаемый результат: "Вот, что мне действ..."

console.log(truncate("Короткая строка", 20)) // Ожидаемый результат: "Короткая строка"
*/

function truncate(str, maxLength) {
  return str.length > maxLength ? str.slice(0, maxLength - 1) + '...' : str
}
