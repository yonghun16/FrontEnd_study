// closure
// '클로저'란? : 내부함수가 외부 함수에 접근할 수 있는 구조(외부함수가 끝나더라도)
// 변수에 함수를 받을 수있는 자바스크립틔의 특성으로 인해 가능한 특성이다. 
/* 클로저의 조건은 아래와 같습니다.
  1. 내부 함수가 익명 함수로 되어 외부 함수의 return값으로 사용되어야 합니다.
  2. 반환되는 내부 함수는 외부 함수의 실행환경에서 실행됩니다.
  3. 내부 함수에서 사용되는 변수는 외부 함수의 변수 스코프에 있어야 합니다.
*/

function outer(){
	var title = 'coding everybody1';
	return function() {
		console.log(title);
	}
}
var inner = outer();  // outer함수의 소멸 후에도
inner();              // inner 내부함수가 외부함수인 outer의 변수에 접근할 수 있다.


function outter(){
    function inner(){
        var title = 'coding everybody2'; 
        console.log(title);
    }
    inner();
}
outter();


function outter(){
    var title = 'coding everybody3';  
    function inner(){        
        console.log(title);   // 내부함수에 title이 선언되지 않았지만, 외부함수에서 선언한 title를 호출 할 수 있다. 
    }
    inner();
}
outter();