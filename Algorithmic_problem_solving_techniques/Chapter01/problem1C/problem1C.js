// https://edu.goorm.io/learn/lecture/554/알고리즘-문제해결기법-입문/lesson/22884/문제1c-카운팅하기 
// Run by Node.js

function getCount(data, n, m, s) {
    let count = 0; //확인해보아야 할 후보의 수

    for(let i=0; i<n; i++){
        if(data[i] === m || data[i] === s){
            count ++;
        }
    }
    
    return count;
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on("line", function(line) {
    input.push(line.trim());

}).on("close", function() {
    const values = input[0].split(" ").map(Number);
    let n = values[0];
    let m = values[1];
    let s = values[2];
    const data = input[1].split(" ").map(Number);
    console.log(getCount(data, n, m, s));

    process.exit();
});

