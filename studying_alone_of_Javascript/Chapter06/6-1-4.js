/* 메소드 선언 구문 */

//변수를 선언합니다.
const pet = {
  name: '구름',
  eat (food) {
    console.log(this.name + '은/는 ' + food + '을/를 먹습니다');
  }
}

//메소드를 호출합니다.
pet.eat('밥')
