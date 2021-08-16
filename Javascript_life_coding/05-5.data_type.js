/* 자료형 */
let whatever = 'Mark';

whatever= 37;
console.log(typeof whatever);

whatever = true;
console.log(typeof whatever);
console.log();

// 데이터 타입
// - 기본타입
//   - Boolean, Null, Undefined
//   - Number, String, Symbol
// - 객체
//   - 표준 내장 객체

// Boolean
console.log(" Boolean");
const isTrue = true;
const isFalse = false;
console.log(isTrue, typeof isTrue);
console.log(isFalse, typeof isFalse);

const a = new Boolean(false);
console.log(a, typeof a);
if(a) { // a가 객체이기 때문에 false지만 실행이 된다.
    console.log('false?');
}

const b = Boolean(false);
console.log(b, typeof b);
if(b) { 
    console.log('false?');
}
console.log();


// Null
console.log(" Null");
const c = null;
console.log(c, typeof c);


// Undefined
let d;
console.log(d, typeof d);
