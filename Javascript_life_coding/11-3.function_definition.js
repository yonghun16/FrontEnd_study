/* 함수의 다양한 정의 방법 */
// 선언적 함수 
console.log(" 선언적 함수");
function numbering(name, age=25) {
    var i = 0;
    while(i<3) {
        console.log(name, age);
        i += 1;
    }
    var returnValue = name + " " + age;
    return returnValue;
}
numbering('Mark', 36);
console.log('return value', numbering('jason', 27));
console.log();


// 익명 함수
// 익명 함수를 활용하여 편하게 객체를 생성한다던가, 함수내에 메소드를 구현
// (익명 함수는 호이스팅이 되지 않는다.)
console.log(" 익명 함수");
var myFunc = function() {
    console.log("8");
};
myFunc();
console.log();


// 생성자 함수
/*
const circle1 = {
    radius: 5,
    getDiameter() {
        return 2 * this.radius;
    },
};

const circle2 = {
    radius: 10,
    getDiameter() {
        return 2 * this.radius;
    },
};
// 다수의 객체를 생성시 중복이 발생
*/
console.log(" 생성자 함수");
function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function() {
        return  2 * this.radius;
    };
}
const circle1 = new Circle(5);     // 객체를 생성 (함수는 객체다)
console.log(circle1.getDiameter());
const circle2 = new Circle(10);
console.log(circle2.getDiameter());
console.log();


// 즉시 실행 함수
// 함수를 호출 할 때 정해진 인자값을 즉시 실행함.
// 로컬 블록 내에서 지역 변수 호이스팅을 방지하고, 글로벌 환경에서 전역변수를 오염시키는 것을 방지하며 함수 내에 정의된 변수에 대한 프라이버시를 유지하면서 동시에 메서드(method)에 대한 공개 액세스를 허용 할 수 있다.
console.log(" 즉시 실행 함수");
var sum=(function(a,b){
    var m = a + b;
    return m;
   })(1,2);
   
console.log(sum);
console.log();

