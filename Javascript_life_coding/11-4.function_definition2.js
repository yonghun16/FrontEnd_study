/* 함수 2 */
/* 선언적 방식 */
function hello1() {
    console.log('hello1');
}
console.log(hello1, typeof hello1);

// 함수의 매개변수
// 함수를 호출할 때 값을 지정
function hello2(name) {
    console.log('hello2', name);
}


// 함수의 리턴
// 함수를 실행하면 얻어지는 값
function hello3(name) {
    return `hello3 ${name}`;
}

console.log(hello3('Mark'));


/* 익명함수를 만들어 변수 할당 */
// 이름이 hello3인 함수를 선언
const hello4 = function() {
    console.log('hello4');
}
console.log(hello4, typeof hello4);


// 매개변수
const hello5 = function(name) {
    console.log('hello5', name);
}

// 차이점 
hello6();   // 호이스팅 가능
function hello6() {
    console.log('hello6');
}

// hello7();  // 호이스팅 불가 
// hello7은 함수가 아니다. var로 선언한 변수가 올라왔지만, 
// 함수인지는 모르겠따.
var hello7 = function() {
    console.log('hello7');
}


// hello8();  // 호이스팅 불가 
// hello8이 먼지 모르겠다. (undefined)
const hello8 = function() {
    console.log('hello8');
}

