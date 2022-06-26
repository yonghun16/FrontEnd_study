/* 배열의 forEach() 메소드 */

const numbers = [273, 52, 103, 32, 57]

numbers.forEach(function (value, index, array) {
  console.log(`${index}번째 요소: ${value}`);
})
