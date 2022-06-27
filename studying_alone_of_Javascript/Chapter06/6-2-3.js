/* JSON.stringify()메소드 */

//자료를 생성합니다.
const data = [{
  name: '혼자 공부하는 파이썬',
  price: 18000,
  publisher: '한빛미디어'
}, {
  name: 'HTML5 웹 프로그래밍 입문',
  price: 26000,
  publisher: '한빛아카데미'
}]

//자료를 JSON으로 변환합니다.
console.log(JSON.stringify(data));
console.log(JSON.stringify(data, null, 2)); 
/* 
 * 2번째 매개변수는 객체에서 어떤 속성만
 * 추출하고 싶을 때 사용하나 거의 사용하지 않으며,
 * 일반적으로 null을 넣는다. 3번째는 들여쓰기 2칸
*/
