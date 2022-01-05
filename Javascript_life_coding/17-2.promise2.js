// promise2

//excutor의 resolve 함수를 실행 할 때 인자를 넣어 실행하면, then의 callback 함수의 인자로 받을 수 있습니다.
function p() {
    return new Promise((resolve, reject) => {
        /* pending */
        setTimeout(() => {
            resolve('fullfilled message');   /* fullfilled */
        }, 2000);
    });
}

p().then((message) => {
    console.log('2000ms 후에 fullfilled 됩니다.', message);
}).catch(() => {
    console.log('2000ms 후에 rejeced 됩니다.');
});



//excutor의 reject 함수를 실행 할 때 인자로 error객체를 넣어 실행하면, then의 callback 함수의 인자로 받을 수 있습니다.
function p2() {
    return new Promise((resolve, reject) => {
        /* pending */
        setTimeout(() => {
            reject(new Error('bad'));    /* rejected */
        }, 1000);
    });
}

p2().then((message) => {
    console.log('1000ms 후에 fullfilled 됩니다.', message);
}).catch((error) => {
    console.log('1000ms 후에 rejeced 됩니다.', error);
});
