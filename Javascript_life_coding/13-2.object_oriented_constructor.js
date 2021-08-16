// 객체지향:생성자와 new
function Person(name){
    this.name = name;
    this.introduce = function(){
            return 'My name is '+ this.name; 
        }   
}
var p1 = new Person('egoing');    // new를 사용
console.log(p1.introduce());
 
var p2 = new Person('leezche');
console.log(p2.introduce());
