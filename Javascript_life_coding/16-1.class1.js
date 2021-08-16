// class
// 선언적 방식
class A {}
console.log(new A());


// class 표현식을 변수에 할당
const B = class {};
console.log(new B());
console.log();


// 선언적 방식이지만 호이스팅은 일어나지 않는다.
/*
new C();
class C {};
*/


// Constructor
class D {}
console.log(new D());

class E {
    constructor() {
        console.log('constructor');
    }
}

console.log(new E());
