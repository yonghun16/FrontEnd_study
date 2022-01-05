/* for */
console.log(" for");
for(var i=0; i<10; i++){
    console.log("for 반복문");
}
console.log();



/* for/in */
// - index나 key값을 할당함.
// - 모든 프로퍼티 : 객체에서도 사용 가능
console.log(" for/in");

var arr = [3, 4, 5];
var i = 2;

for(i in arr){      // i를 2로 초기화 하였어도 for/in문에서  0부터 시작함. 
    console.log(arr[i]);  // value 값 출력
}
console.log();

var obj = {
    name: "이순신",
    age: 20,
    hobby: "활쏘기"
};

for(i in obj){
    console.log(i);       // key값 출력
    console.log(obj[i]);  // value값 출력
}
console.log();



/* for/of */
// - 리터럴한 데이터에서 value값을 할당함.(객체의 프로퍼티는 할당하지 못함.)
console.log(" for/of");
var arr = [3, 4, 5];

for(var v of arr) {
    console.log(v);    // value값만 출력 가능
}
