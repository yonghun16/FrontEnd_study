// < Number() 함수 >

console.log(Number("273"));   // 숫자가 적혀있는 문자열을 숫자로 인식
console.log(typeof(Number("273")));
console.log(Number("$273"));  // -> 값은 숫자로 나타낼 수 없다. Not a Number
console.log(typeof(Number("$273")));  // 하지만 자료형은 숫자다

console.log(Number(true));   // 1
console.log(Number(false));  // 0


