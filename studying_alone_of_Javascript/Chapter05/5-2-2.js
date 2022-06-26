/* 콜백 함수(2): 익명 함수 사용하기 */

//함수를 선언합니다.
function callThreeTimes(callback) {
  for (let i=0; i<3; i++){
    callback(i)
  }
}

//함수를 호출합니다.
callThreeTimes(function (i) {       //익명함수 사용하기
  console.log(`${i}번째 함수 호출`);
})
