/* 연산자 */
// 대입 연산자, 비교 연산자, 산술 연산자, 논리 연산자, 비트 연산자 등

/* 비교 연산자 == === */
console.log();
console.log("비교  연산자 =, == ")
console.log(1==2);           // false
console.log(1==1);           // true
console.log("one" == "two"); // false
console.log("one" == "one"); // true

// ===  → 값 뿐만 아니라 자료형도 같아야 true를 반환
console.log(1 == '1');      // true
console.log(1 === '1');     // false
// === 이 더 정확하므로 이것을 추천함.
// http://dorey.github.io/JavaScript-Equality-Table/

console.log(null == undefined);       // 'true'
console.log(null === undefined);      // false
console.log(true == 1);               // 'true'
console.log(true === 1);              // false
console.log(true == '1');             // 'true'
console.log(true === '1');            // false
console.log(0 === -0);                // true
console.log(NaN === NaN);             // false   NaN은 '숫자가 아니라는 뜻'


/* 비교 연산자 !=, <>, >=  */
console.log();
console.log("비교 연산자 !=, <>, >= 등 ")
console.log(1 != 2);               //true
console.log(1 != 1);               //false
console.log("one" != "two");       //true
console.log("one" != "one");       //false

console.log(10>20);       //false
console.log(10>1);        //true
console.log(10>10);       //false

console.log(10>=20);      //false
console.log(10>=1);       //true
console.log(10>=10);      //true


/* 논리 연산자 &&, ||, ! */
console.log();
console.log("논리 연산자")
if(true && true){
    console.log(1);
}
if(true && false){
    console.log(2);
}
if(false && true){
    console.log(3);
}
if(false && false){
    console.log(4);
}
