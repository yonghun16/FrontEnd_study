/* 변수의 유효범위 */
// let의 유효범위 →  {} 블록 범위
{
    const name = 'Mark';
    console.log(name);
}

// console.log(name);  // 에러 발생

let age = 37;

{
    age++;
    console.log(age);
}
console.log(age);

// 중첩
{
    {
        {
            let age2 = 15;
            console.log(age2);
        }
    }
    // console.log(age2);  // 에러 발생
}
console.log();


// var의 유효범위 → 함수 범위
var a = 0;

(function() {
    a++;
    console.log(a);
})();
console.log(a);

(function() {
    var b = 0;
    console.log(b);
})();
//console.log(b);  // 에러 발생
console.log();


// var는 블록 스코프에서 작동하지 않는다.
{
    var d = 0;
    console.log(d);
}
console.log(d);  // var는 함수 스코프라 블록에서는 의미를 가지지 않는다.
