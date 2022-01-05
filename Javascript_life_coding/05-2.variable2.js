/* 변수와 상수 */
// 변수의 필요성 - 동일한 식에 다른 값을 대입 할 상황
if ((5+10) % 3 === 0) {
    console.log('야호3');
}
if((5+10) % 5 === 0) {
    console.log('야호5');
}
console.log();


// const 상수를 지칭 - 변하지 않는 값.
const sum = 5 + 10;
//const sum = 16 // 에러 발생
if (sum % 3 === 0) {
    console.log('야호3');
}

// variable 변수를 지칭 - 변하는 값.
let result = false;
if (sum % 3 === 0) {
    console.log('야호3');
    result = true;
    console.log(result);
}

