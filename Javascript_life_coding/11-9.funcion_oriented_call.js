// call, apply

// call 예제1 : this는 call를 사용하면 this를 다른 값으로 변경할수 있다. 
const h1 = {name : "peter"};
const h2 = {name : "david"};

function i(){
 console.log(`hi ${this.name}`);
}
//i(); // hi undefind
i.call(h1); // hi peter
i.call(h2); // hi david
console.log();

// call 예제2 : j함수에 없는 변수인 name을 h3로부터 call 할 수 있다. 
const h3 = {
    name: "peter", 
    aa: 1111, 
    bb: 2222
};

function j(a, b) {
    this.aa = a;
    this.bb = b;
    console.log(this.name);
    console.log(this.aa);
    console.log(this.bb);
}
j.call(h3, 1234, 5678);   // h3를 call하여 aa와 bb가 각각 1111, 2222지만 인자로 받은 1234, 5678로 덮어 씌워진다. 
console.log();

// apply 
/* 
apply는 call과 작동원리는 같다. 
다른점은 call이 매개변수를 직접받는 구조라면, apply는 매개변수를 배열로 받는다.
*/

const arr = ['AAA', 'BBB'];
const h4 = {
    name: "jake", 
    aaa: 'aaa', 
    bbb: 'bbb'
};

function j(a, b) {
    this.aaa = a;
    this.bbb = b;
    console.log(this.name);
    console.log(this.aaa);
    console.log(this.bbb);
}
j.apply(h4, arr);