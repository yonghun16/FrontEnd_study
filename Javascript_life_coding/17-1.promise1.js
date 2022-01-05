// Promise

// 1.프로미스의 정의
/*
 * ES6부터 자바스크립트의 표준 내장 객체로 추가되었습니다.
 * ES6를 지원하는 바라우져나 Node.js에서 전역에 있는 Promise를 확인할 수 있습니다.
*/
console.log(Promise);  // 프로미스는 전역함수다.

/*
 * 생성자를 통해서 프로미스 객체를 만들 수 있다.
 * 생성자의 인자로 executor라는 함수를 이용한다.
*/

/*
 * executor 함수는 resolve와 reject를 인자로 가집니다.
 * new promise((resolve, reject) => {... })
 * resolve와 reject는 함수 입니다. resolve(), reject()
 *
 * promise의 pending 상태에서 excutor가 잘 실행된다면 resolve 함수 실행, 그렇지 않으면 reject 함수 실행
 * excutor 함수 인자 중 하나인 resolve 함수를 싱행하면, fulfilled (이행) 상태가 됩니다.
 * excutor 함수 인장 중 하나인 reject 함수를 실행하면, rejected (거부) 상태가 된다.
*/



// 2. 프로미스의 fullfilled
const p = new Promise((resolve, reject)=> {
    /* pending */
    setTimeout(() => {
        resolve(); /* fulfilled */
    }, 2000);
});


//p라는 프로미스 객체가 fulfilled 되는 시점에 p.then 안에 설정한 callback 함수가 실행됩니다.
p.then(() => {
    /* fullfiled */
    console.log('2000ms 후에 fullfilled 됩니다.');
})


/*
 * then을 설정하는 시점을 정확히하고,
 * '함수의 실행과 동시에 프로미스 객체를 만들면서 pending이 시작되도록 하기 위해'
 * 프로미스 객체를 생서하면서 리턴하는 함수 (p)를 만들어 함수 (p) 실행과 동시에 thend을 설정합니다.
*/

function p2() {
    return new Promise((resolve, reject) => {
        /* pending */
        setTimeout(() => {
            resolve(); /* fullfilled */
        }, 1000);
    });
}

p2().then(() => {
    console.log('1000ms 후에 fullfilled 됩니다.');
});


// 3. 프로미스의 rejected
function p3() {
    return new Promise((resolve, reject) => {
        /* pending */
        setTimeout(() => {
            reject(); /* rejeced */
        }, 3000);
    });
}

p3().then(() => {
    console.log('p3에 대한 fullfilled.');
}).catch(() => {
    console.log('3000ms 후에 rejeced 됩니다.');
});
