/* 얕은 복사로 객체 복사하기 */

const 구름 = {
  이름: '구름',
  나이: 6,
  종족: '강아지'
}

const 별 = 구름   // 객체 참조복사
별.이름 = '별'
별.나이 = 1

console.log(JSON.stringify(구름));   // 별에만 추가했는데 구름에도 추가됨
console.log(JSON.stringify(별));
