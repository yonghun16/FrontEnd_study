// closure
// '클로저'란? : 외부 함수의 실행이 끝나고 외부 함수가 소멸된 이후에도 내부 함수가 외부 함수의 변수에 접근할 수 있는 구조
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



// 예제1 - 활용
// 1개의 외부함수를 사용했지만, ghost와 matrix는 각각 독립된 개체가 된다. 
// JavaScript는 기본적으로 Private한 속성을 지원하지 않는데, 클로저의 이러한 특성을 이용해서 Private한 속성을 사용할 수 있게된다.
function factory_movie(title){
    return {
        get_title : function (){
            return title;
        },
        set_title : function(_title){
            title = _title
        }
    }
}
ghost = factory_movie('Ghost in the shell'); 
matrix = factory_movie('Matrix');
 
console.log(ghost.get_title());
console.log(matrix.get_title());
console.log();

ghost.set_title('공각기동대');

console.log(ghost.get_title());
console.log(matrix.get_title());
console.log(); 


// 예제2 - 응용
var arr = []
for(var i = 0; i < 5; i++){
	arr[i] = function(id) {  // arr[i] 각각이 객체가 됨.
		return function(){   // 익명함수의 리턴값이 있어야 각각의 객체를 생성함.
			return id;
		}
    }(i);
}
for(var index in arr) {
    console.log(arr[index]());
}

