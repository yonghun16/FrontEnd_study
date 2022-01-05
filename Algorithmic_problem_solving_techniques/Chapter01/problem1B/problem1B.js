// https://edu.goorm.io/learn/lecture/554/알고리즘-문제해결기법-입문/lesson/22753/문제1b-배열의-최대값

function getMax(array, length) { 
    var max = 0;
    for (var i=0; i<length; i++) {
        if (array[i] > max)
            max = array[i];
    }
    return max;
}

const input = [];

require('readline')
    .createInterface(process.stdin, {})
    .on('line', function(line) {
        input.push(line.trim());
    })
    .on('close', function() {
        const length = parseInt(input[0]);
        const values = input[1].split(" ").map(Number);
        console.log(getMax(values, length));
    });
