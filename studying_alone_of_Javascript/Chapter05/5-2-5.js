/* 배열의 filter() 메소드 */

const numbers = [0, 1, 2, 3, 4, 5]
const evenNumbers = numbers.filter( function(value) {
  return value % 2 === 0
})

console.log(`원래 배열: ${numbers}`);
console.log(`짝수만 추출: ${evenNumbers}`);
