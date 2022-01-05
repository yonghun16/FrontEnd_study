/* boolean */
if(0){
    console.log(1);
}
if(1){
    console.log(2);
}
console.log();

/* 기타 false로 간주되는 데이터 형 */
if(!''){
    console.log("빈 문자열");
}
if(!undefined){
    console.log("undefined");
}
if(!null){
    console.log("null");
}
if(!NaN){
    console.log("NaN");
}
