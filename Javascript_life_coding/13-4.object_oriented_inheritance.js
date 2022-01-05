//상속 

function Person(name){        // 부모 객체(예시 : 보편적 인간)
    this.name = name;
}
Person.prototype.name=null;
Person.prototype.introduce = function(){
    return 'My name is '+this.name; 
}
 
function Programmer(name){    // 자식 객체 (예시: 프로그래머)
    this.name = name;
}
Programmer.prototype = new Person();
 
var p1 = new Programmer('egoing');
console.log(p1.introduce());
