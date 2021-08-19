// class4
// get ,set의 활용

class A {
    _name = 'no name';  // 내부적으로만 쓰이는 변수는 보통 언더바를 단다.

    get name() {
        return this._name + '@@@';
    }

    set name(value) {
        this._name = value + '!!!';
    }
}

const a = new A();
console.log(a);
a.name = 'Mark'      // set 함수 호출
console.log(a);

console.log(a.name); // get 함수 호출
console.log(a._name);
console.log();

// read only
class B {          // get함수만 구현하면 read only를 구현 할 수 있다.
    _name = 'no name';

    get name() {
        return this._name + '@@@';
    }
}

const b = new B();
console.log(b);
b.name = 'Jake'
console.log(b);    // set함수가 없기 때문에 _name가 찍힘.
console.log();




// static 변수 함수(객체가 아니고, 클래스의 변수와 함수)
class C {
    static age = 50;
    static hello() {
        console.log(C.age);
    }
}
console.log(C, C.age);       // static으로 선언하여 클래스에서 직접 접근 가능
C.hello();
console.log();

class D {
    age = 52;
    static hello() {
        console.log(this.age);
    }
}
console.log(D, D.age);
D.hello();
// new D().hello();   // static으로 선언한 것은 클래스에만 속해 있어서 새로 객체를 만들어서는 접근이 불가.
console.log();



// static의 상속
class Parent4 {
    static age = 51;
}

class Child4 extends Parent4 {}

console.log(Parent4.age, Child4.age); // 클래스 변수로는 상속이 된다.



// static name 
class E {
    static name = '이 클래스의 이름은 E가 아니다.';
}
console.log(E);   // 클래스의 이름이 뜨지 않고 name변수에 입력한 값이 나온다. 왤까? static name으로 선언하면 이것이 곧 class의 이름으로 등록 된다.
console.log();

