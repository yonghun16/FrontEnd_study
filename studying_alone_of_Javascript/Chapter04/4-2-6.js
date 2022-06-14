/* for 반복문으로 배열을 반대로 출력하기 */

const todos = ['우유 구매', '업무 메일 확인하기', '필라테스 수업']

for (let i = todos.length-1; i >= 0 ; i--) {
  console.log(`${i}번째 할 일: ${todos[i]}`);
}
