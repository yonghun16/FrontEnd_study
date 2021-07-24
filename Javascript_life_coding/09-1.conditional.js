/* 조건문 */
// if
if(true){
    console.log('result : true');
}
if(false){
    console.log('result : true');
}


// if - else 
if(true){
    console.log(1);
} else {
    console.log(2);
}


// if - else if - else
if(false){
    console.log(1);
} else if(false){
    console.log(2);
} else if(true){
    console.log(3);
} else {
    console.log(4);
}
console.log();


// switch
var day = new Date().getDay();

day = 5;

switch(day) {
    case 1:
    case 2:
    case 3:
    case 4:
    default:
        console.log("주말이 멀었네요");
        break;
    case 5:
        console.log("금요일");
        break;
    case 6:
        console.log("토요일");
        break;
    case 0:
        console.log("일요일");
        break;
}
