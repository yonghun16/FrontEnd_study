/* 변경하고 싶은 속성만 추가하기 */

const 구름 = {
  이름: '구름',
  나이: 6,
  종족: '강아지'
}

const 별 = {
  ...구름,
  이름: '별',       //기존의 속성 덮어 쓰기
  나이: 1,          //기존의 속성 덮어 쓰기
  예방접종: true
}

console.log(JSON.stringify(구름));
console.log(JSON.stringify(별));
