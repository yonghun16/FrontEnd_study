/* arguments를 사용한 가변 매개변수 함수 */

function sample() {
  console.log(arguments);
  for (let i=0; i<arguments.length; i++) {
    console.log(`${i}번째 요소: ${arguments[i]}`);
  }
}

sample(1, 2)
sample(1, 2, 3)
sample(1, 2, 3, 4)
