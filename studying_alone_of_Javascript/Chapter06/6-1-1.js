/* 메소드 내부에서의 this 키워드 */

//변수를 선언한다.
const pet = {
  name: '구름',
  eat: function (food) {
    console.log(this.name + '은/는' + food + '을/를 먹습니다.')
  }
}

//메소드를 호출합니다.
pet.eat('밥')
