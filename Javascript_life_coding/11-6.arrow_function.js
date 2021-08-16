/* 화살표 함수 */
// 화살표를 사용한 익명함수 선언
const hello1 = () => {
    console.log('hello1');
};
hello1(); 

const hello2 = name => {
    console.log('hello2', name);
};
hello2('mark');

const hello3 = (name, age) => {
    console.log('hello3', name, age);
};
hello3('jake', 13);

const hello4 = name => {return `hello4 ${name}`};
const hello5 = name => `hello5 ${name}`;   // return은 생략 가능
console.log(hello4('nadia'));
console.log(hello5('nadia'));
