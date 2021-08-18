// class3

/* class field는 런타임 확인 */

// 맴버 변수(객체의 프로퍼티)

class A {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

console.log(new A('Mark', 37));


class B {   // node.js v12 부터 
    name;
    age;
}
console.log(new B());

class C {
    name = 'no name';
    age = 0;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

console.log(new C('Mark', 37));


// 멤버 함수

class A {
    hello1() {
        console.log('hello1', this);
    }
    hello2 = () => {
        console.log('hello2', this);
    }
}

new A().hello1();
new A().hello2();

class B {
    name = 'Mark';

    hello() {
        console.log('hello', this.name);
    }
}

new B().hello();

