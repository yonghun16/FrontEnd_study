/* a부터 b까지 더하는 함수 */

function sumAll(a, b) {
  let output = 0
  for (let i=a; i<=b; i++) {
    output += i
  }
  return output
}

console.log(`1부터 100까지의 합: ${sumAll(1, 100)}`);
console.log(`1부터 500까지의 합: ${sumAll(1, 500)}`);
