// class5
// extends

class Parent1 {
    name = 'Lee';

    hello() {
        console.log('hello', this.name);
    }
}

class Child1 extends Parent1 {}   // child에 아무것도 해주지 않았지만 상속 받아 프로퍼티가 출력됨.

const p1 = new Parent1();
const c1 = new Child1();
console.log(p1, c1);

c1.hello();
c1.name = 'Anna';
c1.hello();
console.log();



// override
class Parent2 {
    name = 'Lee';

    hello() {
        console.log('hello', this.name);
    }
}

class Child2 extends Parent2 {
    age = 37;      // 자식 클래스에게만 추가하면 오버라이딩이 된다.

    hello() {
        console.log('hello', this.name, this.age);
    }
}

const p2 = new Parent2();
const c2 = new Child2();
console.log(p2, c2);
c2.hello();
console.log();



// super
class Parent3 {
    name;

    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log('hello', this.name);
    }
}

class Child3 extends Parent3 {
    age;

    constructor(name, age) {
        super(name);   // 부모의 name를 받아옴
        this.age = age;
    }

    hello() {
        console.log('hello', this.name, this.age);
    }
}

const p3 = new Parent3('Jeny');
const c3 = new Child3('Jeny', 40);

console.log(p3, c3);
c3.hello();
console.log();


