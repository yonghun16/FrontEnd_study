/* 동적으로 객체 속성 추가하기 */

//객체를 선언합니다.
const student = {}
student.이름 = '윤인성'
student.취미 = '악기'
student.장래희망 = '생명공학자'

//출력합니다.
console.log(JSON.stringify(student, null, 2));
