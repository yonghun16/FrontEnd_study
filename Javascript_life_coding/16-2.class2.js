// class2

// 1. 클래스 기본
class MyClass {
    // 여러 매서드를 정의할 수 있음
    constructor() {}
    method1() {}
    method2() {}
    method3() {}
}

// 2. 클래스의 사용
class User {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(this.name);
    }
}
// 사용법;
let user = new User("John");
user.sayHi();

// 클래스는 함수 입니다.
console.log(typeof User);

// 정확히는 생성자 메서드와 동일합니다.
console.log(User === User.prototype.constructor);

// 클래스 내부에서 정의한 메서드는 User.prototype에 저장됩니다.
console.log(User.prototype.sayHi);

// 현재 프로토타입에는 메서드가 두개 입니다.
console.log(Object.getOwnPropertyNames(User.prototype));
console.log();

// 상속과 prototype
// prototype는 유전자라고 이해하면 쉽다.
function machine(){
    this.q = 'strike';      // 여기다가 쓰면 자식이 {q: 'strike'} 직접 가짐
    this.w = 'snowball';
}

machine.prototype.name = 'kim' // 여기다가 쓰면 부모만 {name:'kim'} 가짐

var nunu = new machine()
console.log(nunu);
console.log(nunu.q);
console.log(nunu.name);  // nunu의 정보에 name: 'kim'이라는 정보는 없지만 프로토타입으로 추가해서 출력 가능
                         // nunu의 name를 찾았지만, 없어서 부모(machine)의 name를 찾아서 출력. 부모도 없으면 조부모 검색
