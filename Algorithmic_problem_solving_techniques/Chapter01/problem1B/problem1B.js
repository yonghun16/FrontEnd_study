// https://edu.goorm.io/learn/lecture/554/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%AC%B8%EC%A0%9C%ED%95%B4%EA%B2%B0%EA%B8%B0%EB%B2%95-%EC%9E%85%EB%AC%B8/lesson/22753/%EB%AC%B8%EC%A0%9C1b-%EB%B0%B0%EC%97%B4%EC%9D%98-%EC%B5%9C%EB%8C%80%EA%B0%92

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
