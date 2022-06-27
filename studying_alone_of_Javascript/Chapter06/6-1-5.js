/* this 키워드 차이 */

//변수를 선언합니다.
const test = {
  a: function () {      //익명함수로 선언
    console.log(this);
  },
  b: () => {            //화살표 함수로 선언
    console.log(this);
  }
}

//메소드를 호출합니다.
test.a()
test.b()
