/* 반복문 */
/* while */
console.log("while");
var i = 0;
while(i < 10){
    console.log("while 반복문");
    i++;
}
console.log();



// do while 
console.log("do while");
do {
    console.log("do");
}while(false)
console.log();



/* 반복문의 제어 break, continue */
console.log("반복문의 제어");
for(var i = 0; i < 10; i++){
    if(i === 5) {  // 조건에 맞으면 루프를 '정지'함.
            console.log("break");
            break;
        }
    console.log('coding everybody '+i);
}
console.log();

for(var i = 0; i < 10; i++){
    if(i === 5) {  // 조건에 맞으면 다음 루프로 넘어간 후 '계속'함.
            console.log("continue");
            continue;
        }
    console.log('coding everybody '+i);
}
