/* 나머지 매개변수와 일반 매개변수를 갖는 함수 */

function sample(a, b, ...c) {
  console.log(a, b, c);
}

sample(1, 2)
sample(1, 2, 3)
sample(1, 2, 3, 4)
