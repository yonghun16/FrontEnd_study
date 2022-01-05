/* var와 호이스팅 */
// 함수 먼저
function hello1() {
    console.log('hello1');
}
hello1();
console.log();

// 함수의 호출을 먼저
// 아래 있는 함수 선언을 먼저 올린다.
hello2();

function hello2() {
    console.log('hello2');
}
console.log();


// var에서도 작동
age = 6;
age++;
console.log(age);
var age;
console.log();


// 선언부만 위로 올라간다. 변수대입은 올라가지 않는다.
console.log(name);  // Woong가 찍히지 않음.
name = 'Mark';
console.log(name);
var name = 'Woong';


// let을 사용하면 문제가 해결된다.
let name2 = 'lobby'; 
console.log(name2);
name2 = 'jecy';
console.log(name2);
//let name2 = 'lobby'; // 에러발생
