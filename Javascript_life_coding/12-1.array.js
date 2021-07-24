/* 배열 */
var member = ['egoing', 'k8805', 'sorialgi'];
console.log(member);
console.log(member[0]);
console.log(member[1]);
console.log(member[2]);
console.log();


/* 배열의 효용 */
// 배열이 없다면 불편하다.
function get_members(){
    return ['egoing', 'k8805', 'sorialgi'];
}

var members = get_members();
console.log(members[0]);
console.log(members[1]);
console.log(members[2]);
console.log();


/* 배열과 반복문 */
function get_members(){
    return ['egoing', 'k8805', 'sorialgi'];
}
members = get_members();

for(i = 0; i < members.length; i++){ 
    console.log(members[i].toUpperCase());   
}
