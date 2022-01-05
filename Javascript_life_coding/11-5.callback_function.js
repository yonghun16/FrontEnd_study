/* 콜백 함수 */
// 1) 다른 함수의 매개변수로 함수를 전달하고, 
// 2) 어떤 이벤트가 발생한 후에 
// 3) 매개변수로 전달한 함수가 다시 호출되는 것
// * 함수 안의 함수를 실행 할 때, 그 실행 함수를 매개변수로 전달 할 수 있는 기능
function calc(a, b, callback) {
    var v = a * b;
    callback(v);
}

calc(2, 4, function(v){
    console.log(v);
})
