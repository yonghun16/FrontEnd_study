/* 배열 함수 */

/* 원소의 추가 */
console.log(" 원소의 추가");

// push() - 배열의 끝에 원소 추가
var li = ['a', 'b', 'c', 'd', 'e'];
li.push('f');
console.log(`push() - ${li}`);


// concat() - 인자로 전달죈 복수의 값을 추가
// - 배열 + 배열 
var li = ['a', 'b', 'c', 'd', 'e'];
li = li.concat(['f', 'g']);
console.log(`concat() - ${li}`);


// unshift - 배열의 첫번째에 원소 추가
var li = ['a', 'b', 'c', 'd', 'e'];
li.unshift('z');
console.log(`unshift() - ${li}`);


// splice - 배열의 중간에 원소 삽입
var li = ['a', 'b', 'c', 'd', 'e'];
li.splice(2, 0, 'B');
console.log(`splice() - ${li}`);
console.log();


/* 원소의 제거 */
console.log(" 원소의 제거");

// shift() - 배열의 첫번째 원소 제거
var li = ['a', 'b', 'c', 'd', 'e'];
li.shift();
console.log(`shift() - ${li}`);

// pop() - 배월의 마지막 원소 제거
var li = ['a', 'b', 'c', 'd', 'e'];
li.pop();
console.log(`pop() - ${li}`);
console.log();


/* 원소의 정렬 */
// sort() - 원소를 정순으로 정렬
console.log(" 원소의 정렬");
var li = ['c', 'e', 'a', 'b', 'd'];
li.sort();
console.log(`sort() - ${li}`);

// reverse() - 원소를 역순으로 정렬
var li = ['c', 'e', 'a', 'b', 'd'];
li.reverse();
console.log(`reverse() - ${li}`);
