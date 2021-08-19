// class3
/* class field는 런타임 확인 */

// 맴버 변수(객체의 프로퍼티) 설정

// 고전적 방법
class A {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

console.log(new A('Mark', 37));
console.log();


// node.js v12 부터 간략화 가능
class B {   
    name;   // this.name
    age;    // this.age
}
console.log(new B());  //constructor를 통해 초기화하지 않았기 때문에 undefined가 출력
console.log();


class C {
    name = 'no name';
    age = 0;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

console.log(new C('Mark-2', 40));
console.log();



// 멤버 함수
class D {
    hello1() {
        console.log('hello1', this);
    }
    hello2 = () => {
        console.log('hello2', this);
    }
}

new D().hello1();
new D().hello2();
console.log();

class E {
    name = 'Mark';

    hello() {
        console.log('hello', this.name);
    }
}

new E().hello();

