/* 배열의 메소드와 화살표 함수 */

//배열을 선언합니다.
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//배열의 메소드를 연속적으로 사용합니다.
numbers
  .filter((value) => value % 2 === 0)
  .map((value) => value * value)
  .forEach((value) => {
    console.log(value);
  })
