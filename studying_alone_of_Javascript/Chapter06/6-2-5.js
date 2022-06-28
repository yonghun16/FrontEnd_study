/* Math.random() 메소드 */

const num = Math.random()

console.log('# 랜덤한 숫자');
console.log('0-1 사이의 랜덤한 숫자:', num);
console.log('');

console.log('# 랜덤한 숫자 범위 확대')
console.log('0~10 사이의 랜덤한 숫자:', num * 10)  // 0 <= 결과 < 10의 범위를 갖습니다.
console.log('0~50 사이의 랜덤한 숫자:', num * 50)
console.log('')

console.log('# 랜덤한 숫자 범위 이동')
console.log('-5~5 사이의 랜덤한 숫자:', num * 10 - 5)
console.log('-25~25 사이의 랜덤한 숫자:', num * 50 - 25)
console.log('')

console.log('# 랜덤한 정수 숫자')
console.log('-5~5 사이의 랜덤한 정수 숫자:', Math.floor(num * 10 - 5))
console.log('-25~25 사이의 랜덤한 정수 숫자:', Math.floor(num * 50 - 25))
