// Global object : 전연객체
// 자바스크립트에서 모든 객체는 기본적으로 전역객체의 프로퍼티임을 알 수 있다. 
var o = {'func':function(){
    alert('Hello?');
}}
o.func();
window.o.func();
