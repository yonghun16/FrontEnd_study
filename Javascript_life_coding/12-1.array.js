/* 배열 */
console.log(" 배열");
var member = ['egoing', 'k8805', 'sorialgi'];
console.log(member);
console.log(member[0]);
console.log(member[1]);
console.log(member[2]);
console.log();


/* 배열과 반복문 */
console.log(" 배열의 반복문");
function get_members(){
    return ['egoing', 'k8805', 'sorialgi'];
}
members = get_members();

for(i = 0; i < members.length; i++){ 
    console.log(members[i].toUpperCase());   
}
console.log();


/* 배열의 선언 */
var arrLit = [1, true, "JavaScript"];             // 배열 리터럴을 이용하는 방법
var arrObj = Array(1, true, "JavaScript");        // Array 객체의 생성자를 이용하는 방법
var arrNewObj = new Array(1, true, "JavaScript"); // new 연산자를 이용한 Array 객체 생성 방법


// 배열의 확장
console.log(" 배열의 확장");
arrLit[3] = "power";
console.log(arrLit + " : 배열의 길이는 " + arrLit.length);  // 배열의 길이가 확장
console.log();


// 배열의 값(만) 제거
console.log(" 배열의 값(만) 제거");
delete arrLit[3];
console.log(arrLit + ", : 배열의 길이는 " + arrLit.length);  // delete를 사용해도 확장된 배열의 길이는 보존됨
console.log();
