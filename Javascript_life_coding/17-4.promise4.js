// promise4

/*
 * 보통비동기 작업을 할 때, callback 함수를 인자로 넣어 로직이 끝나면 callback 함수를 호출합니다.
 * 이런 경우 함수가 아래로 진행되지 않고, callback 함수안으로 진행됩니다.(callback hell)
*/

function c1(callback) {
    setTimeout(() => {
        callback();
    }, 1000)
}

c1(() => {
    console.log('1000ms 후에 callback 함수가 실행됩니다.');
});

c1(() => {
    c1(() => {
        c1(() => {
            console.log('3000ms 후에 callback 함수가 실행됩니다.');
        });
    });
});


// promise 사용
function p1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}

p1()
    .then(() => {
        return p1();
    })
    .then(() => p1())
    .then(p1)
    .then(() => {
        console.log('4000ms 후에 callback 함수가 실행됩니다.');
    })
