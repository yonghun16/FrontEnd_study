/* 전개 연산자를 사용해 깊은 복사하기 */

const 구름 = {
  이름: '구름',
  나이: 6,
  종족: '강아지'
}

const 별 = {...구름}   //객체 깊은복사
별.이름 = '별'
별.나이 = 1

console.log(JSON.stringify(구름));
console.log(JSON.stringify(별));   //별 객체만 추가됨
