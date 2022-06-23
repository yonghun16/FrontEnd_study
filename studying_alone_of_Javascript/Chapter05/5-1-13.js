/* 기본 매개변수를 추가한 윤년 함수 */

function isLeapYear(year=new Date().getFullYear()) {
  console.log(`매개변수 year: ${year}`);
  return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)
}

console.log(`올해는 윤년일까? === ${isLeapYear()}`);
