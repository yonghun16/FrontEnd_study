// 모듈이란? : 구현한 코드 세부 사항을 캡슐화 하고, 공개 API를 노출해 다른 코드에서 쉽게 로드하고 사용할 수 있도록 재사용 가능한 코드 조각

/* a.js의 예제 코드

var sayHi = function() {
    console.log("Hi");
}

var sayBye = function() {
    console.log("Bye");
}

exports.hi = sayHi;
exports.bye = sayBye;

*/

var say = require('./a.js');

say.hi();  // 결과 -> Hi
say.bye();  // 결과 -> Bye

