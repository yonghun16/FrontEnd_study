/* 중첩 반복문 사용하기(2) */

let output = ''

for (let i = 1; i < 15; i++) {
  for (let j =15; j > i; j--) {
    output += ' '
  }
  for (let k = 0; k < 2 * i -1; k++) {
    output += '*'
  }
  output += '\n'
}

console.log(output);
