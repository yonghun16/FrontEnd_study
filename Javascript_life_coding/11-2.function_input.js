/* 함수의 입력 */
console.log(" 함수의 입력");
function get_member1(){
    return 'egoing';
}

function get_member2(){
    return 'k8885';
}

console.log(get_member1());
console.log(get_member2());
console.log();


function get_member3(){
    return 'egoing';  // 여기서 리턴되고 나머지는 실행 안됨
    return 'k8805';
    return 'sorialgi';
}
console.log(get_member3());


/* 함수의 출력 */
console.log(" 함수의 출력");
function get_argument(arg){
    return arg;
}
console.log(get_argument(1));
console.log(get_argument(2));


function get_argument2(arg1, arg2){
    return arg1 + arg2
}
console.log(10, 20);
