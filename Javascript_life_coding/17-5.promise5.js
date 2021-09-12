// promise5

/*
 * value가 프로미스 객체인지 아닌지 알 수 없는 경우, 사용하면 연결된 then메서드 를실행합니다.
 * value가프로미스 객체면, resolve 된then 메서드를 실행합니다.
 * value가프로미스 객체가 아니면, value를인자로 보내면서 then 메서드를 실행합니다.
*/

Promise.resolve(/* value */);

Promise.resolve(new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 1000)
})).then((data) => {
    console.log('프로미스객체인 경우, resolve 된결과를 받아 then이실행 됩니다.', data,
    );
})

Promise.resolve('bar').then(data => {
    console.log('then 메서드가 없는 경우', data);
});
 