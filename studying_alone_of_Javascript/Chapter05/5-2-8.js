/* 타이머 취소하기 */

let id
let count = 0
id = setInterval(()=> {
  console.log(`1초마다 실행됩니다(${count}번째)`);
  count++
}, 1 * 1000)

setTimeout(()=> {
  console.log('타이머를 종료합니다.');
  clearInterval(id)
}, 5* 1000)
